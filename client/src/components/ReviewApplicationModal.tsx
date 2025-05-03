import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ApplicationFormData } from "@shared/schema";
import { Job } from "@shared/schema";
import MetaLoginModal from "./MetaLoginModal";

interface ReviewApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToEdit: () => void;
  onSubmit: () => void;
  applicationData: ApplicationFormData | null;
  resumeFile: File | null;
  job: Job | null;
  onMetaAccountLinked?: (status: boolean) => void;
}

const ReviewApplicationModal = ({
  isOpen,
  onClose,
  onBackToEdit,
  onSubmit,
  applicationData,
  resumeFile,
  job,
  onMetaAccountLinked,
}: ReviewApplicationModalProps) => {
  const [showMetaLogin, setShowMetaLogin] = useState(false);
  const [accountLinked, setAccountLinked] = useState(false);
  
  if (!applicationData || !job) return null;

  const handleMetaLoginSuccess = () => {
    setShowMetaLogin(false);
    setAccountLinked(true);
    // Invoke parent component callback to update the metaAccountLinked state
    if (typeof onMetaAccountLinked === 'function') {
      onMetaAccountLinked(true);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Review Your Application
            </DialogTitle>
          </DialogHeader>

          <div className="py-4 space-y-6">
            {/* Position */}
            <div>
              <h4 className="text-sm text-neutral-500 mb-1">Position</h4>
              <p className="text-lg font-medium">{job.title}</p>
            </div>
            
            {/* Personal Info */}
            <div>
              <h4 className="text-sm text-neutral-500 mb-1">Full Name</h4>
              <p className="text-lg">{applicationData.firstName} {applicationData.lastName}</p>
            </div>
            
            <div>
              <h4 className="text-sm text-neutral-500 mb-1">Contact Information</h4>
              <p>{applicationData.email}</p>
              <p>{applicationData.phone}</p>
            </div>
            
            {/* Resume */}
            <div>
              <h4 className="text-sm text-neutral-500 mb-1">Resume/CV</h4>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <p>{resumeFile ? resumeFile.name : 'No resume uploaded'}</p>
              </div>
            </div>
            
            {/* Cover Letter */}
            <div>
              <h4 className="text-sm text-neutral-500 mb-1">Cover Letter</h4>
              <div className="mt-2 p-4 bg-neutral-50 rounded-md">
                <p className="text-neutral-700 whitespace-pre-line">
                  {applicationData.coverLetter || 'No cover letter provided'}
                </p>
              </div>
            </div>
            
            {/* Meta Account Link */}
            <div className="mt-6 p-4 border border-neutral-200 rounded-lg bg-neutral-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" fill="#0668E1" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Meta Account</h4>
                    <p className="text-sm text-neutral-600">Link your Meta account to improve application verification</p>
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={() => setShowMetaLogin(true)}
                  variant={accountLinked ? "ghost" : "outline"}
                  className={accountLinked ? "text-green-600 cursor-default" : "border-[#1877F2] text-[#1877F2]"}
                  disabled={accountLinked}
                >
                  {accountLinked ? (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Linked
                    </div>
                  ) : "Link Account"}
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onBackToEdit}
                className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
              >
                Back to Edit
              </Button>
              <Button
                type="button"
                onClick={onSubmit}
                className="bg-[#25D366] text-white hover:bg-opacity-90"
              >
                Confirm & Submit
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <MetaLoginModal 
        isOpen={showMetaLogin}
        onClose={() => setShowMetaLogin(false)}
        onSuccess={handleMetaLoginSuccess}
      />
    </>
  );
};

export default ReviewApplicationModal;

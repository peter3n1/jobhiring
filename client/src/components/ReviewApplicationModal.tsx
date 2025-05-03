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

interface ReviewApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToEdit: () => void;
  onSubmit: () => void;
  applicationData: ApplicationFormData | null;
  resumeFile: File | null;
  job: Job | null;
}

const ReviewApplicationModal = ({
  isOpen,
  onClose,
  onBackToEdit,
  onSubmit,
  applicationData,
  resumeFile,
  job,
}: ReviewApplicationModalProps) => {
  if (!applicationData || !job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Review Your Application
          </DialogTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
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
              <i className="fas fa-file-pdf text-neutral-600 mr-2"></i>
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
  );
};

export default ReviewApplicationModal;

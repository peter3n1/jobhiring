import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationModal = ({ isOpen, onClose }: ConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg">
        <div className="p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-[#25D366] bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
              <CheckIcon className="h-8 w-8 text-[#25D366]" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Application received – thank you!</h3>
          <p className="text-neutral-600 mb-8">
            We appreciate your interest in joining WhatsApp. You'll receive an email confirmation and next steps within a few working days.
          </p>
          <Button 
            onClick={onClose}
            className="bg-[#25D366] text-white hover:bg-opacity-90"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;

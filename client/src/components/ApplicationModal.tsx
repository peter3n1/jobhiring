import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { applicationFormSchema, ApplicationFormData } from "@shared/schema";
import { Job } from "@shared/schema";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ApplicationFormData, resumeFile: File | null) => void;
  job: Job | null;
}

const ApplicationModal = ({ isOpen, onClose, onSubmit, job }: ApplicationModalProps) => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      jobId: job?.id || 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      coverLetter: "",
      consent: false,
    },
  });

  // Update jobId when job changes
  if (job && job.id !== form.getValues().jobId) {
    form.setValue("jobId", job.id);
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setResumeFile(null);
      return;
    }

    const file = files[0];

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File size exceeds 5MB limit");
      return;
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      setResumeError("Please upload a PDF or Word document");
      return;
    }

    setResumeFile(file);
    setResumeError(null);
  };

  const handleRemoveResume = () => {
    setResumeFile(null);
    setResumeError(null);
    const fileInput = document.getElementById('resume-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleFormSubmit = (data: ApplicationFormData) => {
    onSubmit(data, resumeFile);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {job ? `Apply for ${job.title}` : 'Apply for Position'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8 py-2">
          {/* Personal Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name*</Label>
                <Input
                  id="firstName"
                  {...form.register("firstName")}
                  className={form.formState.errors.firstName ? "border-red-500" : ""}
                />
                {form.formState.errors.firstName && (
                  <p className="text-red-500 text-sm">{form.formState.errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name*</Label>
                <Input
                  id="lastName"
                  {...form.register("lastName")}
                  className={form.formState.errors.lastName ? "border-red-500" : ""}
                />
                {form.formState.errors.lastName && (
                  <p className="text-red-500 text-sm">{form.formState.errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="email">Email Address*</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className={form.formState.errors.email ? "border-red-500" : ""}
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="phone">Phone Number*</Label>
              <Input
                id="phone"
                type="tel"
                {...form.register("phone")}
                className={form.formState.errors.phone ? "border-red-500" : ""}
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <h4 className="text-lg font-medium mb-4">Resume/CV</h4>
            <div className="border-2 border-dashed border-neutral-300 rounded-md p-6 text-center">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <p className="text-neutral-600 mb-4">Drag and drop your resume or click to browse</p>
              <Label
                htmlFor="resume-upload"
                className="inline-block bg-neutral-100 hover:bg-neutral-200 text-neutral-800 py-2 px-4 rounded-md cursor-pointer transition-all"
              >
                Browse Files
                <Input
                  type="file"
                  id="resume-upload"
                  name="resume"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                />
              </Label>
              <p className="text-xs text-neutral-500 mt-2">Accepted formats: PDF, DOC, DOCX (max 5MB)</p>
            </div>

            {resumeError && (
              <p className="text-red-500 text-sm mt-2">{resumeError}</p>
            )}

            {resumeFile && (
              <div className="mt-4 bg-neutral-50 p-3 rounded-md">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <span className="text-sm">{resumeFile.name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="ml-auto text-neutral-500 hover:text-neutral-700"
                    onClick={handleRemoveResume}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Cover Letter */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-medium">Cover Letter</h4>
              <span className="text-sm text-neutral-500">Optional</span>
            </div>
            <Textarea
              id="coverLetter"
              {...form.register("coverLetter")}
              rows={4}
              placeholder="Tell us why you're interested in this position..."
            />
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              className={form.formState.errors.consent ? "border-red-500" : ""}
              checked={form.watch("consent")}
              onCheckedChange={(checked) => form.setValue("consent", checked === true)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="consent"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to share my information with WhatsApp Team and consent to the processing
                of my personal data according to the{" "}
                <a href="#" className="text-[#25D366] hover:underline">
                  Privacy Policy
                </a>
                .
              </Label>
              {form.formState.errors.consent && (
                <p className="text-red-500 text-sm">{form.formState.errors.consent.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-[#25D366] text-white hover:bg-opacity-90"
            >
              Review Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;


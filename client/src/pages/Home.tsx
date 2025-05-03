import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyJoinUsSection from "@/components/WhyJoinUsSection";
import NewsSection from "@/components/NewsSection";
import JobListingsSection from "@/components/JobListingsSection";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";
import ReviewApplicationModal from "@/components/ReviewApplicationModal";
import ConfirmationModal from "@/components/ConfirmationModal";
import { Job } from "@shared/schema";
import { ApplicationFormData } from "@shared/schema";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [applicationData, setApplicationData] = useState<ApplicationFormData | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [metaAccountLinked, setMetaAccountLinked] = useState(false);

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const handleReviewApplication = (data: ApplicationFormData, file: File | null) => {
    setApplicationData(data);
    setResumeFile(file);
    setShowApplicationModal(false);
    setShowReviewModal(true);
  };

  const handleBackToEdit = () => {
    setShowReviewModal(false);
    setShowApplicationModal(true);
  };

  const handleSubmitApplication = async () => {
    if (!applicationData || !selectedJob) return;
    
    try {
      const formData = new FormData();
      
      // Add all application data to the form
      Object.entries(applicationData).forEach(([key, value]) => {
        if (key !== 'consent') { // Skip the consent field as it's just for UI
          formData.append(key, String(value));
        }
      });
      
      // Add the resume file if it exists
      if (resumeFile) {
        formData.append('resume', resumeFile);
      }
      
      // Send application to server
      const response = await fetch('/api/applications', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application to server');
      }
      
      // Send to EmailJS
      const emailjsData = {
        job_title: selectedJob.title,
        candidate_name: `${applicationData.firstName} ${applicationData.lastName}`,
        candidate_email: applicationData.email,
        candidate_phone: applicationData.phone,
        cover_letter: applicationData.coverLetter || 'No cover letter provided',
        resume_attached: resumeFile ? 'Yes' : 'No',
        resume_filename: resumeFile ? resumeFile.name : 'None',
        location: selectedJob.location,
        department: selectedJob.department,
        meta_account_linked: metaAccountLinked ? 'Yes' : 'No',
        application_date: new Date().toLocaleDateString(),
      };
      
      // Send email
      await emailjs.send(
        'service_ieaopgl',  // Service ID
        'template_zvcv0qf', // Template ID
        emailjsData,
        'pgcGwVmRmBOKo-kUL' // Public Key
      );
      
      // Show success confirmation
      setShowReviewModal(false);
      setShowConfirmationModal(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      // Continue showing confirmation even if EmailJS fails to prevent blocking user
      setShowReviewModal(false);
      setShowConfirmationModal(true);
    }
  };

  const closeConfirmation = () => {
    setShowConfirmationModal(false);
    setApplicationData(null);
    setResumeFile(null);
    setSelectedJob(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <WhyJoinUsSection />
        <NewsSection />
        <JobListingsSection onApply={handleApply} />
      </main>
      <Footer />

      {/* Modals */}
      <ApplicationModal 
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        onSubmit={handleReviewApplication}
        job={selectedJob}
      />

      <ReviewApplicationModal 
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        onBackToEdit={handleBackToEdit}
        onSubmit={handleSubmitApplication}
        applicationData={applicationData}
        resumeFile={resumeFile}
        job={selectedJob}
      />

      <ConfirmationModal 
        isOpen={showConfirmationModal}
        onClose={closeConfirmation}
      />
    </div>
  );
}

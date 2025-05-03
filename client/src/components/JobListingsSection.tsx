import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Job } from "@shared/schema";

interface JobListingsSectionProps {
  onApply: (job: Job) => void;
}

const JobListingsSection = ({ onApply }: JobListingsSectionProps) => {
  const { data: jobs, isLoading } = useQuery<Job[]>({
    queryKey: ['/api/jobs'],
  });

  const [selectedFilters, setSelectedFilters] = useState({
    department: [] as string[],
    location: [] as string[],
  });
  const [salaryRange, setSalaryRange] = useState([2]); // Default mid-range
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  // Filter options (derived from data or fallback)
  const departments = [
    "Marketing & Communications",
    "Engineering",
    "Trust & Safety / Security",
    "Product Management",
    "Design & UX",
    "Operations & Support",
    "Data Science & AI"
  ];

  const locations = [
    "Remote",
    "Global",
    "Menlo Park, CA",
    "London, UK"
  ];

  const salaryLabels = [
    "$80k - $100k",
    "$100k - $120k",
    "$120k - $150k",
    "$150k - $180k",
    "$180k+"
  ];

  const salaryRanges = [
    [80000, 100000],
    [100000, 120000],
    [120000, 150000],
    [150000, 180000],
    [180000, 1000000]
  ];

  // Toggle filter selection
  const toggleFilter = (type: "department" | "location", value: string) => {
    setSelectedFilters(prev => {
      if (prev[type].includes(value)) {
        // Remove filter
        return {
          ...prev,
          [type]: prev[type].filter(item => item !== value)
        };
      } else {
        // Add filter
        return {
          ...prev,
          [type]: [...prev[type], value]
        };
      }
    });
  };

  // Handle job details toggle
  const toggleJobDetails = (jobId: number) => {
    setExpandedJobId(prevId => prevId === jobId ? null : jobId);
  };

  // Apply filters to jobs
  useEffect(() => {
    if (!jobs) return;
    
    const [minSalary, maxSalary] = salaryRanges[salaryRange[0]];
    
    const filtered = jobs.filter(job => {
      const matchesDepartment = selectedFilters.department.length === 0 || 
                               selectedFilters.department.includes(job.department);
      
      const matchesLocation = selectedFilters.location.length === 0 || 
                             selectedFilters.location.includes(job.location);
      
      const matchesSalary = job.salary >= minSalary && job.salary <= maxSalary;
      
      return matchesDepartment && matchesLocation && matchesSalary;
    });
    
    setFilteredJobs(filtered);
  }, [jobs, selectedFilters, salaryRange]);

  // Fallback jobs in case API fails
  const fallbackJobs: Job[] = [
    {
      id: 1,
      title: "Social Media Manager",
      location: "Global",
      department: "Marketing & Communications",
      salary: 110000,
      salaryDisplay: "$110k - $130k",
      responsibilities: "Develop and implement social media strategy aligned with WhatsApp's mission\nManage WhatsApp's presence across social platforms\nCreate engaging content that highlights our privacy and security features\nAnalyze performance metrics and optimize campaigns\nStay current with social media trends and best practices",
      requirements: "5+ years of experience in social media management\nProven track record of growing engagement across platforms\nStrong understanding of social analytics tools\nExcellent writing and communication skills\nExperience with global audiences preferred",
      benefits: "Competitive salary and equity packages\nComprehensive health, dental, and vision insurance\nGenerous parental leave policy\nProfessional development allowance\nRemote work flexibility",
      createdAt: new Date()
    },
    {
      id: 2,
      title: "Backend Engineer - Security",
      location: "Remote",
      department: "Engineering",
      salary: 160000,
      salaryDisplay: "$160k - $180k",
      responsibilities: "Design and implement secure backend systems\nWork on encryption protocols and security features\nParticipate in code reviews and security audits\nCollaborate with cross-functional teams\nStay up-to-date with security best practices",
      requirements: "7+ years of experience in backend development\nStrong knowledge of cryptography and secure systems design\nExperience with high-scale distributed systems\nExcellent problem-solving abilities\nBachelor's degree in Computer Science or equivalent experience",
      benefits: "Competitive salary and equity packages\nComprehensive health, dental, and vision insurance\nGenerous parental leave policy\nProfessional development allowance\nRemote work flexibility",
      createdAt: new Date()
    },
    {
      id: 3,
      title: "Senior Product Designer",
      location: "London, UK",
      department: "Design & UX",
      salary: 130000,
      salaryDisplay: "$130k - $150k",
      responsibilities: "Create user-centered designs for WhatsApp features\nCollaborate with engineers and product managers\nConduct user research and usability testing\nDevelop design systems and patterns\nMentor junior designers",
      requirements: "5+ years of product design experience\nStrong portfolio demonstrating UX and UI skills\nExperience with design systems and component libraries\nAbility to work in cross-functional teams\nExcellent communication skills",
      benefits: "Competitive salary and equity packages\nComprehensive health, dental, and vision insurance\nGenerous parental leave policy\nProfessional development allowance\nFlexible work arrangements",
      createdAt: new Date()
    }
  ];

  const displayJobs = filteredJobs.length > 0 ? filteredJobs : (jobs || fallbackJobs);

  return (
    <section id="jobs" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Open Positions</h2>
        
        <div className="flex flex-col lg:flex-row">
          {/* Filter Panel */}
          <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-8">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h3 className="font-medium text-lg mb-4">Filter By</h3>
              
              {/* Department Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-neutral-800">Department</h4>
                <div className="space-y-2 text-neutral-600">
                  {departments.map((dept) => (
                    <div 
                      key={dept}
                      className={`cursor-pointer hover:text-[#25D366] transition-all flex items-center ${
                        selectedFilters.department.includes(dept) ? "text-[#25D366]" : ""
                      }`}
                      onClick={() => toggleFilter("department", dept)}
                    >
                      <Checkbox 
                        checked={selectedFilters.department.includes(dept)}
                        className="mr-2 data-[state=checked]:bg-[#25D366] data-[state=checked]:text-primary-foreground"
                        onCheckedChange={() => toggleFilter("department", dept)}
                      />
                      <span>{dept}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-neutral-800">Location</h4>
                <div className="space-y-2 text-neutral-600">
                  {locations.map((location) => (
                    <div 
                      key={location}
                      className={`cursor-pointer hover:text-[#25D366] transition-all flex items-center ${
                        selectedFilters.location.includes(location) ? "text-[#25D366]" : ""
                      }`}
                      onClick={() => toggleFilter("location", location)}
                    >
                      <Checkbox 
                        checked={selectedFilters.location.includes(location)}
                        className="mr-2 data-[state=checked]:bg-[#25D366] data-[state=checked]:text-primary-foreground"
                        onCheckedChange={() => toggleFilter("location", location)}
                      />
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Salary Range */}
              <div>
                <h4 className="font-medium mb-3 text-neutral-800">Salary Range</h4>
                <div className="mb-2">
                  <Slider
                    defaultValue={[2]}
                    max={4}
                    step={1}
                    value={salaryRange}
                    onValueChange={setSalaryRange}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>$80k</span>
                  <span>{salaryLabels[salaryRange[0]]}</span>
                  <span>$200k+</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="lg:w-3/4">
            <div className="space-y-4">
              {isLoading ? (
                // Skeleton loaders
                Array(3).fill(0).map((_, index) => (
                  <Card key={index} className="bg-white shadow-sm animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
                      <div className="flex justify-end">
                        <div className="h-8 bg-gray-200 rounded w-24"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : displayJobs.length === 0 ? (
                <Card className="bg-white p-6 rounded-lg shadow-sm">
                  <CardContent className="p-6 text-center">
                    <p className="text-neutral-600">No jobs match your current filters. Try adjusting your criteria.</p>
                  </CardContent>
                </Card>
              ) : (
                // Actual job listings
                displayJobs.map((job) => (
                  <Card key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <h3 className="font-medium text-xl mb-1">{job.title}</h3>
                          <div className="text-neutral-600 mb-4">
                            <span className="inline-flex items-center">
                              <i className="fas fa-map-marker-alt mr-2 text-neutral-400"></i> {job.location}
                            </span>
                            <span className="mx-3">•</span>
                            <span>{job.department}</span>
                          </div>
                          <div className="text-neutral-600 mb-4">
                            <span className="bg-neutral-100 text-neutral-700 py-1 px-3 rounded-full text-sm">
                              {job.salaryDisplay}
                            </span>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white mt-4 md:mt-0"
                          onClick={() => toggleJobDetails(job.id)}
                        >
                          {expandedJobId === job.id ? 'Hide Details' : 'View Details'}
                        </Button>
                      </div>
                      
                      {/* Job Details (Hidden by default) */}
                      {expandedJobId === job.id && (
                        <div className="mt-6 pt-6 border-t border-neutral-100">
                          <div className="mb-6">
                            <h4 className="font-medium text-lg mb-3">Responsibilities</h4>
                            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                              {job.responsibilities.split('\n').map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="font-medium text-lg mb-3">Requirements</h4>
                            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                              {job.requirements.split('\n').map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="font-medium text-lg mb-3">Benefits & Perks</h4>
                            <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                              {job.benefits.split('\n').map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <Button 
                            className="bg-[#25D366] text-white hover:bg-opacity-90"
                            onClick={() => onApply(job)}
                          >
                            Apply Now
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListingsSection;

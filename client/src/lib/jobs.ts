import { Job, News, Testimonial } from "@shared/schema";

// Sample data for initial load before API calls
export const sampleJobs: Job[] = [
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
    title: "Social Media Coordinator",
    location: "Remote",
    department: "Marketing & Communications",
    salary: 90000,
    salaryDisplay: "$90k - $110k",
    responsibilities: "Assist in executing social media campaigns\nCreate and schedule content across platforms\nMonitor engagement and respond to comments\nTrack social media metrics and prepare reports\nStay updated on platform changes and best practices",
    requirements: "2+ years of experience in social media\nExperience with social media management tools\nStrong written and visual communication skills\nAttention to detail and ability to manage multiple projects\nExcellent time management skills",
    benefits: "Competitive salary and equity packages\nComprehensive health, dental, and vision insurance\nFlexible work schedule\nProfessional development opportunities\nRemote work option",
    createdAt: new Date()
  },
  {
    id: 3,
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
    id: 4,
    title: "Senior iOS Engineer",
    location: "Menlo Park, CA",
    department: "Engineering",
    salary: 180000,
    salaryDisplay: "$180k - $200k",
    responsibilities: "Build and maintain WhatsApp's iOS application\nDevelop new features and improve existing functionality\nCollaborate with design and product teams\nEnsure high-quality, performant code\nMentor junior engineers",
    requirements: "5+ years of iOS development experience\nDeep understanding of Swift and Objective-C\nExperience with performance optimization and debugging\nFamiliarity with UI/UX design principles\nStrong communication and teamwork skills",
    benefits: "Competitive salary and equity packages\nComprehensive health, dental, and vision insurance\nOn-site amenities and catered meals\nRelocation assistance\nGenerous PTO and holidays",
    createdAt: new Date()
  },
  {
    id: 5,
    title: "Senior Product Designer",
    location: "London, UK",
    department: "Design & UX",
    salary: 130000,
    salaryDisplay: "$130k - $150k",
    responsibilities: "Create user-centered designs for WhatsApp features\nCollaborate with engineers and product managers\nConduct user research and usability testing\nDevelop design systems and patterns\nMentor junior designers",
    requirements: "5+ years of product design experience\nStrong portfolio demonstrating UX and UI skills\nExperience with design systems and component libraries\nAbility to work in cross-functional teams\nExcellent communication skills",
    benefits: "Competitive salary and equity packages\nComprehensive health, dental, and vision insurance\nGenerous parental leave policy\nProfessional development allowance\nFlexible work arrangements",
    createdAt: new Date()
  },
  {
    id: 6,
    title: "Data Scientist - User Privacy",
    location: "Remote",
    department: "Data Science & AI",
    salary: 150000,
    salaryDisplay: "$150k - $170k",
    responsibilities: "Analyze user privacy patterns and behaviors\nDevelop models to enhance privacy features\nCollaborate with security and product teams\nCreate dashboards and reports for stakeholders\nDesign and implement A/B tests",
    requirements: "Advanced degree in Computer Science, Statistics, or related field\n4+ years of experience in data science\nStrong programming skills in Python and SQL\nExperience with machine learning frameworks\nKnowledge of privacy regulations and best practices",
    benefits: "Competitive salary and equity packages\nComprehensive health, dental, and vision insurance\nFlexible work schedule\nRemote work option\nContinuous learning and development opportunities",
    createdAt: new Date()
  }
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elena",
    role: "Privacy Engineer",
    quote: "Every day, I help build technology that gives people control over their own conversations. That's what drives me.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    createdAt: new Date()
  },
  {
    id: 2,
    name: "Jordan",
    role: "Software Engineer",
    quote: "I've never worked anywhere that empowers remote teams quite like this. The culture of trust is unmatched.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    createdAt: new Date()
  },
  {
    id: 3,
    name: "Priya",
    role: "Product Designer",
    quote: "Designing for a global audience at WhatsApp challenges me to think inclusively, every single day.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    createdAt: new Date()
  }
];

export const sampleNews: News[] = [
  {
    id: 1,
    title: "WhatsApp Introduces New Privacy Controls",
    date: "Mar 1, 2025",
    description: "Learn about our latest features that put you in control of your privacy.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Voices From The Team: Our Culture in Action",
    date: "Feb 15, 2025",
    description: "Discover what makes WhatsApp's company culture unique.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    createdAt: new Date()
  },
  {
    id: 3,
    title: "Building Better Messaging for Remote Communities",
    date: "Jan 29, 2025",
    description: "How we're optimizing WhatsApp for areas with limited connectivity.",
    imageUrl: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    createdAt: new Date()
  }
];

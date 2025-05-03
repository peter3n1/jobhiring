import { 
  users, type User, type InsertUser, 
  jobs, type Job, type InsertJob,
  applications, type Application, type InsertApplication,
  news, type News, type InsertNews,
  testimonials, type Testimonial, type InsertTestimonial
} from "@shared/schema";
import { sampleJobs, sampleTestimonials, sampleNews } from "../client/src/lib/jobs";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  // User methods (existing)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Job methods
  getAllJobs(): Promise<Job[]>;
  getJob(id: number): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  
  // Application methods
  getAllApplications(): Promise<Application[]>;
  getApplicationsByJobId(jobId: number): Promise<Application[]>;
  createApplication(application: InsertApplication): Promise<Application>;
  
  // News methods
  getAllNews(): Promise<News[]>;
  createNews(news: InsertNews): Promise<News>;
  
  // Testimonial methods
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Initialize data
  initializeData(): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private jobsMap: Map<number, Job>;
  private applicationsMap: Map<number, Application>;
  private newsMap: Map<number, News>;
  private testimonialsMap: Map<number, Testimonial>;
  
  private userCurrentId: number;
  private jobCurrentId: number;
  private applicationCurrentId: number;
  private newsCurrentId: number;
  private testimonialCurrentId: number;

  constructor() {
    this.users = new Map();
    this.jobsMap = new Map();
    this.applicationsMap = new Map();
    this.newsMap = new Map();
    this.testimonialsMap = new Map();
    
    this.userCurrentId = 1;
    this.jobCurrentId = 1;
    this.applicationCurrentId = 1;
    this.newsCurrentId = 1;
    this.testimonialCurrentId = 1;
  }

  // Initialize with sample data
  async initializeData(): Promise<void> {
    // Only initialize if data doesn't exist
    if (this.jobsMap.size === 0) {
      for (const job of sampleJobs) {
        await this.createJob({
          title: job.title,
          location: job.location,
          department: job.department,
          salary: job.salary,
          salaryDisplay: job.salaryDisplay,
          responsibilities: job.responsibilities,
          requirements: job.requirements,
          benefits: job.benefits,
        });
      }
    }
    
    if (this.testimonialsMap.size === 0) {
      for (const testimonial of sampleTestimonials) {
        await this.createTestimonial({
          name: testimonial.name,
          role: testimonial.role,
          quote: testimonial.quote,
          imageUrl: testimonial.imageUrl,
        });
      }
    }
    
    if (this.newsMap.size === 0) {
      for (const item of sampleNews) {
        await this.createNews({
          title: item.title,
          date: item.date,
          description: item.description,
          imageUrl: item.imageUrl,
        });
      }
    }
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Job methods
  async getAllJobs(): Promise<Job[]> {
    return Array.from(this.jobsMap.values());
  }
  
  async getJob(id: number): Promise<Job | undefined> {
    return this.jobsMap.get(id);
  }
  
  async createJob(insertJob: InsertJob): Promise<Job> {
    const id = this.jobCurrentId++;
    const job: Job = { ...insertJob, id, createdAt: new Date() };
    this.jobsMap.set(id, job);
    return job;
  }
  
  // Application methods
  async getAllApplications(): Promise<Application[]> {
    return Array.from(this.applicationsMap.values());
  }
  
  async getApplicationsByJobId(jobId: number): Promise<Application[]> {
    return Array.from(this.applicationsMap.values()).filter(
      (application) => application.jobId === jobId,
    );
  }
  
  async createApplication(insertApplication: InsertApplication): Promise<Application> {
    const id = this.applicationCurrentId++;
    const application: Application = { ...insertApplication, id, createdAt: new Date() };
    this.applicationsMap.set(id, application);
    return application;
  }
  
  // News methods
  async getAllNews(): Promise<News[]> {
    return Array.from(this.newsMap.values());
  }
  
  async createNews(insertNews: InsertNews): Promise<News> {
    const id = this.newsCurrentId++;
    const newsItem: News = { ...insertNews, id, createdAt: new Date() };
    this.newsMap.set(id, newsItem);
    return newsItem;
  }
  
  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonialsMap.values());
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialCurrentId++;
    const testimonial: Testimonial = { ...insertTestimonial, id, createdAt: new Date() };
    this.testimonialsMap.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();

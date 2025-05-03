import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

const TestimonialsSection = () => {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  // Fallback testimonials in case API fails
  const fallbackTestimonials = [
    {
      id: 1,
      name: "Elena",
      role: "Privacy Engineer",
      quote: "Every day, I help build technology that gives people control over their own conversations. That's what drives me.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Jordan",
      role: "Software Engineer",
      quote: "I've never worked anywhere that empowers remote teams quite like this. The culture of trust is unmatched.",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Priya",
      role: "Product Designer",
      quote: "Designing for a global audience at WhatsApp challenges me to think inclusively, every single day.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const displayTestimonials = testimonials || fallbackTestimonials;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Hear From Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton loaders
            Array(3).fill(0).map((_, index) => (
              <Card key={index} className="bg-neutral-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Skeleton className="w-16 h-16 rounded-full" />
                    <div className="ml-4">
                      <Skeleton className="h-5 w-24 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-2" />
                  <Skeleton className="h-4 w-4/6" />
                </CardContent>
              </Card>
            ))
          ) : (
            // Actual testimonials
            displayTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-neutral-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      <AvatarImage src="https://github.com/shadcn.png" alt={testimonial.name} className="object-cover" />
                    </Avatar>
                    <div className="ml-4">
                      <h4 className="font-medium text-lg">{testimonial.name}</h4>
                      <p className="text-neutral-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-neutral-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

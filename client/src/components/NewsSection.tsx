import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const NewsSection = () => {
  const { data: newsItems, isLoading } = useQuery<NewsItem[]>({
    queryKey: ['/api/news'],
  });

  // Fallback news in case API fails
  const fallbackNews = [
    {
      id: 1,
      title: "WhatsApp Introduces New Privacy Controls",
      date: "Mar 1, 2025",
      description: "Learn about our latest features that put you in control of your privacy.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Voices From The Team: Our Culture in Action",
      date: "Feb 15, 2025",
      description: "Discover what makes WhatsApp's company culture unique.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Building Better Messaging for Remote Communities",
      date: "Jan 29, 2025",
      description: "How we're optimizing WhatsApp for areas with limited connectivity.",
      imageUrl: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const displayNews = newsItems || fallbackNews;

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Latest WhatsApp News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton loaders
            Array(3).fill(0).map((_, index) => (
              <Card key={index} className="bg-neutral-50 rounded-xl overflow-hidden transition-all hover:shadow-md">
                <Skeleton className="w-full h-48" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            ))
          ) : (
            // Actual news items
            displayNews.map((item) => (
              <a key={item.id} href="#" className="group">
                <Card className="bg-neutral-50 rounded-xl overflow-hidden transition-all hover:shadow-md">
                  <img 
                    src={item.imageUrl || "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <p className="text-sm text-neutral-500 mb-2">{item.date}</p>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-[#25D366] transition-all">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

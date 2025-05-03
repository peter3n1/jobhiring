
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <div className="flex items-center mb-4">
              <img
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=671474&_nc_ohc=3tH7COfshLwAX_7BMv_&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfCdYHVwTRPg8NuO-y3CKN9YQCZhDYQJ5iP3Mp-YL0ZVEQ&oe=65C8AACA"
                alt="Meta Logo"
                className="h-8 w-auto mr-2"
              />
              <span className="text-sm text-neutral-600 align-middle">
                A Meta Company
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              Build What Matters – Join WhatsApp
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              We're building private, secure, and simple communication for billions. Explore opportunities where your work shapes the future of connection.
            </p>
            <a href="#jobs">
              <Button className="bg-[#25D366] hover:bg-opacity-90 text-white py-3 px-8 rounded-md font-medium transition-all">
                View Open Positions
              </Button>
            </a>
          </div>

          <div className="md:w-1/2 relative">
            <img 
              src="https://www.whatsapp.com/careers-cms/Careers_1_Career_Hero_Desktop@2x_V02.png"
              alt="WhatsApp Career" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 flex items-center space-x-2">
              <img
                src="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png"
                alt="WhatsApp Logo"
                className="w-8 h-8"
              />
              <div className="bg-black bg-opacity-50 px-3 py-1 rounded-full">
                <span className="text-white font-semibold text-sm">
                  WhatsApp Careers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

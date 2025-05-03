import { Button } from "@/components/ui/button";

      const HeroSection = () => {
        return (
          <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
                  {/* Meta logo FIXED */}
                  <div className="flex items-center mb-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                      alt="Meta Logo"
                      className="h-5 w-auto mr-2"
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

                {/* Hero image section */}
                <div className="md:w-1/2 relative flex justify-center items-center">
                  <div className="absolute bg-[#25D366] opacity-10 rounded-3xl w-72 h-96 -rotate-6 z-0"></div>
                  <div className="relative z-10 w-[500px]">
                    <img 
                      src="https://www.whatsapp.com/careers-cms/Careers_1_Career_Hero_Desktop@2x_V02.png" 
                      alt="WhatsApp Career" 
                      className="rounded-xl shadow-xl w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <img
                        src="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png"
                        alt="WhatsApp Logo"
                        className="w-8 h-8"
                      />
                      <span className="text-white font-semibold text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
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
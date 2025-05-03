import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <div className="flex items-center mb-4">
              <svg width="80" height="16" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8 1.2h10.9v38.8h-10.9V1.2zm16.3 10.9h10.4v27.9H43.1V12.1zm5.2-10.8c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zM67.1 21c1.5-5.8 5.6-10.2 12.9-10.2 8.2 0 12.8 5.1 12.8 13.4v16.8H82.5V25.5c0-4-1.9-6.2-5.6-6.2-3.7 0-6 2.2-6 6.7v14h-10.4V12.1h6.6v8.9zm46.8-8.9h11.1v27.9h-10.5v-5.2c-1.5 3.7-5.5 6.5-11.3 6.5-8.4 0-14.7-7.1-14.7-15.1 0-8.3 6.3-15.1 14.7-15.1 5.8 0 9.8 2.7 11.3 6.5v-5.5h-.6zm-9 22.5c4.9 0 9-3.6 9-8.4s-4.1-8.4-9-8.4-8.8 3.6-8.8 8.4 3.9 8.4 8.8 8.4zm69.9-22.9c-1.7-.3-3.1-.5-4.6-.5-8.1 0-13.4 6.9-13.4 15.4 0 8.4 5.2 15.5 13.4 15.5 1.6 0 3.1-.2 4.6-.5v-29.9zm-27.1 1.3c1.7-1.2 3.6-2.2 5.5-2.8 3.4-1.2 7-1.9 10.6-1.9 3.7 0 7.3.6 10.7 1.9 1.9.7 3.8 1.6 5.5 2.8 1.7 1.2 3.3 2.6 4.7 4.3 1.4 1.6 2.5 3.5 3.3 5.5.8 2 1.2 4.1 1.2 6.4 0 2.2-.4 4.4-1.2 6.4-.8 2-1.9 3.8-3.3 5.5-1.4 1.6-3 3.1-4.7 4.3-1.7 1.2-3.6 2.2-5.5 2.8-3.5 1.2-7.1 1.9-10.7 1.9-3.7 0-7.3-.6-10.7-1.9-1.9-.7-3.8-1.6-5.5-2.8-1.7-1.2-3.3-2.6-4.7-4.3-1.4-1.6-2.5-3.5-3.3-5.5-.8-2-1.2-4.1-1.2-6.4 0-2.2.4-4.4 1.2-6.4.8-2 1.9-3.8 3.3-5.5 1.4-1.7 3-3.1 4.8-4.3zm13.8-1.6V1.2H172v38.8h-10.4V11.4zM183 39.6V.4h10.4v39.2H183z" fill="#0866FF" fillRule="evenodd" />
              </svg>
              <span className="text-sm text-neutral-600 ml-2">A Meta Company</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Build What Matters – Join WhatsApp</h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">We're building private, secure, and simple communication for billions. Explore opportunities where your work shapes the future of connection.</p>
            <a href="#jobs">
              <Button className="bg-[#25D366] hover:bg-opacity-90 text-white py-3 px-8 rounded-md font-medium transition-all">
                View Open Positions
              </Button>
            </a>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-lg shadow-md relative z-10 max-w-xs mx-auto md:ml-auto md:mr-0">
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="rounded-lg shadow-md">
                <rect width="500" height="500" fill="#f0f0f0" />
                <text x="250" y="250" fontFamily="Arial" fontSize="24" textAnchor="middle" fill="#888">Person using WhatsApp</text>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/4 -translate-x-1/4 md:-translate-x-3/4 z-0 bg-[#dcf8c6] rounded-3xl w-72 h-96 -rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState } from "react";
import { Link } from "wouter";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="h-8 mr-3">
            <defs>
              <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#25d366" />
                <stop offset="1" stopColor="#25d366" />
              </linearGradient>
            </defs>
            <path fill="#25d366" d="M87.4 175.5c-35.6 0-67-21.1-81-53.4-14-32.3-6.1-70.3 20-95.4C55.2.9 95.3-7.9 129.8 7.3c34.5 15.1 56.9 50 54.8 87.9-2.2 41.5-35.4 74.7-76.9 76.8-.8.1-1.6.1-2.4.1h-8.1c-3.4 0-6.7 0-9.8 3.4zm.1-153c-34.9 0-66.8 25.6-66.9 69 0 9 2.2 17.9 6.4 25.9l4.2 7.9-4.2 25.2 26.1-4.2 7.7 3.9c8.3 4.2 17.6 6.4 26.9 6.4 34.9 0 66.7-25.6 66.9-69-.1-37.8-30.5-65.1-67.1-65.1z" />
            <path fill="url(#b)" d="M87.1 153c-8.9 0-17.8-2.3-25.5-6.5l-27.5 4.5 4.6-27.2c-4.7-8.3-7.1-17.7-7.1-27.2 0-31.5 25.6-57.1 57.2-57.1s57.1 25.6 57.1 57.1c0 31.6-25.6 57.1-57.1 57.1h-1.7v.3z" />
            <path fill="#fff" d="M66.5 54.9c-1.2-2.6-2.4-2.7-3.5-2.7-1-.1-2 0-3.1 0s-2.8.4-4.3 2c-1.5 1.5-5.8 5.6-5.8 13.7s5.9 15.9 6.7 17 11.6 17.7 28.1 24.8c13.9 6 16.7 4.8 19.7 4.5s9.7-4 11.1-7.7c1.4-3.8 1.4-7.1 1-7.8-.4-.7-1.5-1.1-3.1-1.9s-9.7-4.8-11.2-5.3-2.6-.8-3.7.8-4.2 5.3-5.2 6.4c-1 1.1-1.9 1.2-3.5.4-1.6-.8-6.8-2.5-13-8-4.8-4.3-8.1-9.6-9-11.2s-.1-2.5.7-3.3c.7-.7 1.6-1.9 2.4-2.8s1.1-1.6 1.6-2.7c.5-1.1.2-2.1-.1-2.9s-3.6-8.7-5-11.9" />
          </svg>
          <span className="font-semibold text-lg hidden md:inline-block">Careers</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="text-neutral-700 hover:text-[#25D366] transition-all">About</a></li>
            <li><a href="#jobs" className="text-neutral-700 hover:text-[#25D366] transition-all">Jobs</a></li>
            <li><a href="#culture" className="text-neutral-700 hover:text-[#25D366] transition-all">Culture</a></li>
            <li><a href="#news" className="text-neutral-700 hover:text-[#25D366] transition-all">News</a></li>
          </ul>
        </nav>
        
        <div className="block md:hidden">
          <button 
            className="text-neutral-700" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="bg-white w-full md:hidden">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about" 
                  className="block text-neutral-700 hover:text-[#25D366] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#jobs" 
                  className="block text-neutral-700 hover:text-[#25D366] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Jobs
                </a>
              </li>
              <li>
                <a 
                  href="#culture" 
                  className="block text-neutral-700 hover:text-[#25D366] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Culture
                </a>
              </li>
              <li>
                <a 
                  href="#news" 
                  className="block text-neutral-700 hover:text-[#25D366] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

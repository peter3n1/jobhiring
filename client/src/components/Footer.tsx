const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <svg width="100" height="24" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.8 1.2h10.9v38.8h-10.9V1.2zm16.3 10.9h10.4v27.9H43.1V12.1zm5.2-10.8c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zM67.1 21c1.5-5.8 5.6-10.2 12.9-10.2 8.2 0 12.8 5.1 12.8 13.4v16.8H82.5V25.5c0-4-1.9-6.2-5.6-6.2-3.7 0-6 2.2-6 6.7v14h-10.4V12.1h6.6v8.9zm46.8-8.9h11.1v27.9h-10.5v-5.2c-1.5 3.7-5.5 6.5-11.3 6.5-8.4 0-14.7-7.1-14.7-15.1 0-8.3 6.3-15.1 14.7-15.1 5.8 0 9.8 2.7 11.3 6.5v-5.5h-.6zm-9 22.5c4.9 0 9-3.6 9-8.4s-4.1-8.4-9-8.4-8.8 3.6-8.8 8.4 3.9 8.4 8.8 8.4zm69.9-22.9c-1.7-.3-3.1-.5-4.6-.5-8.1 0-13.4 6.9-13.4 15.4 0 8.4 5.2 15.5 13.4 15.5 1.6 0 3.1-.2 4.6-.5v-29.9zm-27.1 1.3c1.7-1.2 3.6-2.2 5.5-2.8 3.4-1.2 7-1.9 10.6-1.9 3.7 0 7.3.6 10.7 1.9 1.9.7 3.8 1.6 5.5 2.8 1.7 1.2 3.3 2.6 4.7 4.3 1.4 1.6 2.5 3.5 3.3 5.5.8 2 1.2 4.1 1.2 6.4 0 2.2-.4 4.4-1.2 6.4-.8 2-1.9 3.8-3.3 5.5-1.4 1.6-3 3.1-4.7 4.3-1.7 1.2-3.6 2.2-5.5 2.8-3.5 1.2-7.1 1.9-10.7 1.9-3.7 0-7.3-.6-10.7-1.9-1.9-.7-3.8-1.6-5.5-2.8-1.7-1.2-3.3-2.6-4.7-4.3-1.4-1.6-2.5-3.5-3.3-5.5-.8-2-1.2-4.1-1.2-6.4 0-2.2.4-4.4 1.2-6.4.8-2 1.9-3.8 3.3-5.5 1.4-1.7 3-3.1 4.8-4.3zm13.8-1.6V1.2H172v38.8h-10.4V11.4zM183 39.6V.4h10.4v39.2H183z" fill="#0866FF" fillRule="evenodd" />
            </svg>
            <p className="text-neutral-600 max-w-xs mt-4">
              Empowering connection with privacy at the core — across the world and every platform we build.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-lg mb-4">Meta Products</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><a href="#" className="hover:text-[#25D366] transition-all">Facebook</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Instagram</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">WhatsApp</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Threads</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Messenger</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Careers</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><a href="#jobs" className="hover:text-[#25D366] transition-all">Open Positions</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Internships</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Benefits</a></li>
                <li><a href="#culture" className="hover:text-[#25D366] transition-all">Life at WhatsApp</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Engineering Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><a href="#" className="hover:text-[#25D366] transition-all">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Candidate Privacy</a></li>
                <li><a href="#" className="hover:text-[#25D366] transition-all">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Meta Platforms, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-600 hover:text-[#25D366] transition-all">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-neutral-600 hover:text-[#25D366] transition-all">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-neutral-600 hover:text-[#25D366] transition-all">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-neutral-600 hover:text-[#25D366] transition-all">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

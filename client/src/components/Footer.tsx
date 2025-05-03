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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="text-neutral-600 hover:text-[#25D366] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-neutral-600 hover:text-[#25D366] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-neutral-600 hover:text-[#25D366] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

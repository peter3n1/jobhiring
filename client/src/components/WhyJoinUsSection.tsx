const WhyJoinUsSection = () => {
  return (
    <section id="culture" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">Why Join Us?</h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          We believe great things happen when people feel safe, respected, and challenged. 
          At WhatsApp, you'll join a mission-driven team that values privacy, speed, and real-world impact.
        </p>
        
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="WhatsApp Engineer" 
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl font-light italic text-neutral-800 mb-6">
              "It's powerful to know that the work I do makes real life better for millions of people — not just online, but in how they connect with the world."
            </blockquote>
            <div className="flex items-center">
              <div className="w-2 h-12 bg-[#25D366] mr-4"></div>
              <div>
                <h4 className="font-medium text-lg">Tyrone</h4>
                <p className="text-neutral-600">Security Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;


import React from 'react';
import AnimatedSection from './common/AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      </div> */}
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold font-medium text-sm rounded-full mb-6">
                Premier Legal Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                Excellence in <span className="text-gold">Legal</span> Representation
              </h1>
              <p className="text-lg text-navy/80 mb-8 leading-relaxed">
                We provide exceptional legal services with a commitment to integrity, 
                professionalism, and personalized attention to your unique legal needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="px-6 py-3 bg-navy text-white font-medium rounded-md hover:bg-navy/90 transition-all transform hover:scale-[1.02] shadow-elegant">
                  Schedule Consultation
                </button>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-navy text-navy font-medium rounded-md hover:bg-navy/5 transition-colors">
                  Our Services
                </button>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="order-1 lg:order-2" delay={300}>
            <div className="relative p-6">
              <div className="absolute top-0 right-0 w-full h-full border-2 border-gold rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                alt="Professional Lawyer" 
                className="w-full h-auto object-cover rounded-lg shadow-elegant relative z-10"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;

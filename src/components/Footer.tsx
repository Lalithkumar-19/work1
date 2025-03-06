
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">
              <span className="text-gold">L</span>awyer <span className="text-gold">F</span>irm
            </h3>
            <p className="text-white/70 mb-6">
              Providing exceptional legal services with integrity and expertise since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Corporate Law</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Family Law</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Real Estate Law</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Estate Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/70 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/70">
                  123 Legal Avenue, Suite 400<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white/70">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/70">info@lawfirm.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {currentYear} Lawyer Firm. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-white/70 hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-gold transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

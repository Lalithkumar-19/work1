
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Send } from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

const Contact: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-off-white">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gold/10 text-gold font-medium text-sm rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="section-title">Contact Our Legal Team</h2>
            <p className="section-subtitle mx-auto">
              Schedule a consultation or send us a message. Our team is ready to assist you with your legal needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <AnimatedSection className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-elegant h-full">
              <h3 className="text-2xl font-semibold text-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Our Office</h4>
                    <p className="text-navy/70">
                      123 Legal Avenue, Suite 400<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Phone</h4>
                    <p className="text-navy/70">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Email</h4>
                    <p className="text-navy/70">info@lawfirm.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Business Hours</h4>
                    <p className="text-navy/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Weekends: By appointment only
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-navy mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3" delay={200}>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-elegant">
              <h3 className="text-2xl font-semibold text-navy mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-700 mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy/70 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy/70 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy/70 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-navy/70 mb-2">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Real Estate Law">Real Estate Law</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Estate Planning">Estate Planning</option>
                      <option value="Litigation">Litigation</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-navy/70 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full md:w-auto px-6 py-3 bg-navy text-white font-medium rounded-md hover:bg-navy/90 transition-all transform hover:scale-[1.02] shadow-elegant ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Award, BookOpen, BriefcaseBusiness } from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{value}</div>
      <div className="text-sm text-navy/70 uppercase tracking-wider">{label}</div>
    </div>
  </AnimatedSection>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative p-6">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-lg -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                alt="Law Firm Team" 
                className="w-full h-auto object-cover rounded-lg shadow-elegant relative z-10"
              />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-gold rounded-lg -z-10"></div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold font-medium text-sm rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                A Legacy of Legal Excellence Since 1995
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-navy/70 mb-6 leading-relaxed">
                Founded on principles of integrity and excellence, our firm has been at the forefront of legal services for over two decades. Our team of dedicated attorneys brings together extensive experience across multiple practice areas.
              </p>
              <p className="text-navy/70 mb-8 leading-relaxed">
                We take pride in our client-centered approach, ensuring that each case receives the personalized attention it deserves. Our commitment to achieving the best possible outcomes for our clients has established us as a trusted name in the legal community.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <StatItem value="25+" label="Years Experience" delay={300} />
              <StatItem value="1500+" label="Cases Won" delay={400} />
              <StatItem value="98%" label="Client Satisfaction" delay={500} />
            </div>

            <AnimatedSection delay={600}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="text-gold mr-2">
                    <Award size={20} />
                  </div>
                  <span className="text-navy font-medium">Award-Winning Team</span>
                </div>
                <div className="flex items-center">
                  <div className="text-gold mr-2">
                    <BriefcaseBusiness size={20} />
                  </div>
                  <span className="text-navy font-medium">Industry Specialists</span>
                </div>
                <div className="flex items-center">
                  <div className="text-gold mr-2">
                    <BookOpen size={20} />
                  </div>
                  <span className="text-navy font-medium">Advanced Legal Resources</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

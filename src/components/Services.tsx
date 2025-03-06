
import React from 'react';
import { Shield, FileText, Scale, Briefcase, Users, Home } from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full">
        <div className="text-gold mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-navy">{title}</h3>
        <p className="text-navy/70">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Corporate Law",
      description: "Comprehensive legal solutions for businesses, including formation, compliance, and contract negotiations.",
      icon: <Briefcase size={32} />,
    },
    {
      title: "Family Law",
      description: "Compassionate representation for divorce, child custody, and other family-related legal matters.",
      icon: <Users size={32} />,
    },
    {
      title: "Real Estate Law",
      description: "Expert guidance for property transactions, landlord-tenant disputes, and real estate litigation.",
      icon: <Home size={32} />,
    },
    {
      title: "Criminal Defense",
      description: "Strategic defense representation for individuals facing criminal charges or investigations.",
      icon: <Shield size={32} />,
    },
    {
      title: "Estate Planning",
      description: "Thoughtful planning for your future with wills, trusts, and comprehensive estate strategies.",
      icon: <FileText size={32} />,
    },
    {
      title: "Litigation",
      description: "Skilled advocacy in civil litigation matters across various practice areas.",
      icon: <Scale size={32} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-off-white">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gold/10 text-gold font-medium text-sm rounded-full mb-4">
              Our Practice Areas
            </span>
            <h2 className="section-title">Comprehensive Legal Services</h2>
            <p className="section-subtitle mx-auto">
              We offer a wide range of legal services to meet your personal and business needs with expertise and dedication.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

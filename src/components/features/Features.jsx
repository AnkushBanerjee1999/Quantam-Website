import { 
  CpuChipIcon, 
  ArrowsPointingOutIcon, 
  ChartBarIcon, 
  CogIcon 
} from '@heroicons/react/24/outline';
import FeatureCard from './FeatureCard';
import ServiceCard from './ServiceCard';
import CloudProviders from './CloudProviders';
import { services } from './data/services';

const features = [
  {
    title: 'AI-Powered Automation',
    description: 'Leverage advanced AI to automate complex workflows and decision-making processes.',
    icon: CpuChipIcon
  },
  {
    title: 'Seamless Integration',
    description: 'Connect and orchestrate data across multiple platforms and services effortlessly.',
    icon: ArrowsPointingOutIcon
  },
  {
    title: 'Real-time Analytics',
    description: 'Monitor and analyze performance metrics with comprehensive dashboards.',
    icon: ChartBarIcon
  },
  {
    title: 'Process Optimization',
    description: 'Optimize operations with intelligent process management and automation.',
    icon: CogIcon
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your business with our comprehensive suite of features designed for modern enterprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium mb-4">AI Services & Microservices</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Deploy powerful AI capabilities across any cloud platform. Our services are available as microservices
            that can be consumed on AWS, Azure, or Google Cloud.
          </p>
          <CloudProviders />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
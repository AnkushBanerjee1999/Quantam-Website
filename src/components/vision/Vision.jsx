import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const Vision = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-medium mb-8">Our Vision</h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-gray-300"
          >
            <p className="text-xl leading-relaxed">
            We aim to be recognized as the preferred technology enabler, empowering businesses across industries to unlock the full potential of data orchestration.
            </p>
            
            <p className="text-lg leading-relaxed">
            We partner with organizations in Finance, Telecom, Retail, Manufacturing, Engineering, Construction, Travel, Government, and other sectors to deliver advanced AI-driven solutions. Our solutions are dynamic, decentralized, data-focused, automated, and self-learning, designed for seamless application internally or in B2B environments, whether on cloud, on-premise, or in real-time.
            </p>
            
            <p className="text-lg leading-relaxed italic">
            We focus on solving challenges and creating innovative, AI-powered solutions in collaboration with our partners.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
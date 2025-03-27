import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const Mission = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-medium mb-8">Our Mission</h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
           The mission is to empower businesses to be transformed through the orchestration of their data, facilitated by AI and agentic AI, to connect systems, enable people, and align processes, ensuring value generation is maximized through improved operational efficiency and enhanced revenue growth.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const TeamHero = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-medium mb-6">
            We are your strategic partner to a fully digital and sustainable future
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Quantam is proud to establish close relationships with its Partners by becoming an extension of their team. It was over a decade ago that we made a commitment to delivering comprehensive integration and orchestration of enterprise data to enable business to transform years of IP, experience and capability into solutions which meet the challenges of tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHero;
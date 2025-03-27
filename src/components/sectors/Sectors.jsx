import { motion } from 'framer-motion';
import SectorGrid from './SectorGrid';
import { fadeInUp } from '../../utils/animations';

const Sectors = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-medium mb-4">Sector-Wise AI Agents Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our specialized AI agents bring deep domain knowledge and cutting-edge capabilities to various industry sectors.
          </p>
        </motion.div>
        <SectorGrid />
      </div>
    </section>
  );
};

export default Sectors;
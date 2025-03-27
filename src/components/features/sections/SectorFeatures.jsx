import { motion } from 'framer-motion';
import { sectors } from '../../sectors/data/sectors';
import SectorCard from './SectorCard';
import SectorIllustration from '../animations/SectorIllustration';

const SectorFeatures = () => (
  <section id="sectors" className="mb-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-medium text-white mb-4">Sector-Wise Solutions</h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Our platform provides specialized solutions across various industries, leveraging AI and automation to address sector-specific challenges.
      </p>
    </motion.div>

    <div className="relative">
      <SectorIllustration />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((sector, index) => (
          <SectorCard
            key={sector.id}
            {...sector}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default SectorFeatures;
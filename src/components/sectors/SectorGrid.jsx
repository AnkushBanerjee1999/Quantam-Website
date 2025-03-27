import { motion } from 'framer-motion';
import SectorCard from './SectorCard';
import { sectors } from './data/sectors';

const SectorGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {sectors.map((sector, index) => (
        <SectorCard
          key={sector.id}
          {...sector}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default SectorGrid;
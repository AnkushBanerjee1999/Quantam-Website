import { motion } from 'framer-motion';
import { fadeInRight } from '../../utils/animations';
import ConnectionLine from './animations/ConnectionLine';
import FeatureNode from './animations/FeatureNode';
import PlatformCore from './animations/PlatformCore';
import DataFlow from './animations/DataFlow';

const features = [
  { label: 'Cloud Services', x: 15, y: 20, color: 'blue' },
  { label: 'IoT Devices', x: 85, y: 30, color: 'green' },
  { label: 'AI Models', x: 20, y: 70, color: 'purple' },
  { label: 'Databases', x: 80, y: 80, color: 'indigo' },
];

const connections = [
  { start: 15, end: 45, delay: 0 },
  { start: 55, end: 85, delay: 0.5 },
  { start: 20, end: 45, delay: 1 },
  { start: 55, end: 80, delay: 1.5 },
];

const PlatformVisual = () => {
  return (
    <motion.div
      {...fadeInRight}
      viewport={{ once: true }}
      className="relative h-[500px] bg-gray-900/50 rounded-lg overflow-hidden"
    >
      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <FeatureNode
            key={feature.label}
            {...feature}
            delay={index * 0.2}
          />
        ))}
        
        {connections.map((connection, index) => (
          <ConnectionLine
            key={index}
            {...connection}
          />
        ))}

        <PlatformCore />

        {features.map((feature, index) => (
          <DataFlow
            key={`flow-${index}`}
            pathPoints={`M ${feature.x} ${feature.y} Q 50 50, 50 50`}
            color={feature.color}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PlatformVisual;
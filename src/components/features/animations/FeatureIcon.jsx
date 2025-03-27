import { motion } from 'framer-motion';

const FeatureIcon = ({ icon: Icon, color = "indigo" }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className={`w-12 h-12 bg-${color}-600/20 rounded-lg flex items-center justify-center`}
  >
    <Icon className={`w-6 h-6 text-${color}-500`} />
  </motion.div>
);

export default FeatureIcon;
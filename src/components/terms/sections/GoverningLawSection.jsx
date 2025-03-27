import { motion } from 'framer-motion';

const GoverningLawSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-8"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Governing Law</h2>
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-gray-300 leading-relaxed"
    >
      The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
    </motion.p>
  </motion.section>
);

export default GoverningLawSection;
import { motion } from 'framer-motion';

const TranslationSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Translation Interpretation</h2>
    <div className="space-y-4 text-gray-300">
      <p className="leading-relaxed">
        These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
      </p>
    </div>
  </motion.section>
);

export default TranslationSection;
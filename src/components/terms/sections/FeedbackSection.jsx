import { motion } from 'framer-motion';

const FeedbackSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Your Feedback to Us</h2>
    <div className="space-y-4 text-gray-300">
      <p className="leading-relaxed">
        You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without restriction.
      </p>
    </div>
  </motion.section>
);

export default FeedbackSection;
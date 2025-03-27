import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import PrivacyContent from './PrivacyContent';
import PrivacyShield from './animations/PrivacyShield';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-medium text-white mb-8 text-center">
              Privacy Policy
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-8 shadow-xl"
            >
              <PrivacyShield />
              <PrivacyContent />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import TermsContent from './TermsContent';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-medium text-white mb-8 text-center">
              Terms of Use
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 rounded-lg p-8 shadow-xl space-y-8"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                Please read these terms and conditions carefully before using Our Service.
              </p>
              <TermsContent />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
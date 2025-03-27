import { motion } from 'framer-motion';

const TerminationSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Termination</h2>
    <div className="space-y-4 text-gray-300">
      <p className="leading-relaxed">
        We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
      </p>
      <p className="leading-relaxed">
        Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.
      </p>
    </div>
  </motion.section>
);

export default TerminationSection;
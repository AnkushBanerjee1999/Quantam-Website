import { motion } from 'framer-motion';

const ChangesSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Changes to These Terms</h2>
    <div className="space-y-4 text-gray-300">
      <p className="leading-relaxed">
        We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
      </p>
      <p className="leading-relaxed">
        By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
      </p>
    </div>
  </motion.section>
);

export default ChangesSection;
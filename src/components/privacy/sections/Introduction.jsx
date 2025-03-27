import { motion } from 'framer-motion';

const Introduction = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-gray-300 space-y-4"
  >
    <p className="leading-relaxed">
      Quantam is committed to protecting the personal information of our content readers and users. This Privacy Policy ("Policy") explains how Quantam collects and uses individual information that you might in the course of reading or interacting with the www.Quantam.com website.
    </p>
    <p className="leading-relaxed">
      Please read this Policy before submitting any personal information to Quantam. By using www.Quantam.com, you consent to the collection and use of your personal information as outlined in this Policy.
    </p>
  </motion.section>
);

export default Introduction;
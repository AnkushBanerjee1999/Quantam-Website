import { motion } from 'framer-motion';

const ContactSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Contact Us</h2>
    <div className="space-y-4 text-gray-300">
      <p className="leading-relaxed">
        If you have any questions about these Terms and Conditions, You can contact us:
      </p>
      <p className="leading-relaxed">
        By e-mail: info@Quantam.com
      </p>
    </div>
  </motion.section>
);

export default ContactSection;
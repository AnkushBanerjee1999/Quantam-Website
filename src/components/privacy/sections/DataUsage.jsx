import { motion } from 'framer-motion';

const DataUsage = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4 text-gray-300"
  >
    <h2 className="text-2xl font-medium text-white mb-4">How We Use Collected Information</h2>
    <p className="leading-relaxed">
      Quantam uses the information we collect about you for the following purposes:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>To respond to inquiries that you submit to us via contact forms on the site and to provide any information you request from us</li>
      <li>To communicate with customers and other site visitors about ongoing programs and projects, such as beta tests, surveys, promotions, events, and education offerings</li>
      <li>To better design programs, products, and services in accordance with your interests and preferences</li>
      <li>To perform research and analysis that supports Quantam's mission to provide relevant, practical programs, products, and services</li>
      <li>To maintain the technical functionality of the website</li>
    </ul>
    <p className="leading-relaxed">
      Quantam does not sell, rent, or otherwise share personally identifiable information with non-agent third parties for promotional or marketing purposes without your permission.
    </p>
  </motion.section>
);

export default DataUsage;
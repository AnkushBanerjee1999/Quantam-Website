import { motion } from 'framer-motion';

const AcknowledgmentSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Acknowledgment</h2>
    <div className="space-y-4 text-gray-300">
      <p className="leading-relaxed">
        These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
      </p>
      <p className="leading-relaxed">
        Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
      </p>
      <p className="leading-relaxed">
        By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
      </p>
      <p className="leading-relaxed">
        You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
      </p>
      <p className="leading-relaxed">
        Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
      </p>
    </div>
  </motion.section>
);

export default AcknowledgmentSection;
import { motion } from 'framer-motion';

const LinksSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Links to Other Websites</h2>
    <div className="space-y-4 text-gray-300">
      <p className="leading-relaxed">
        Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
      </p>
      <p className="leading-relaxed">
        The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
      </p>
      <p className="leading-relaxed">
        We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
      </p>
    </div>
  </motion.section>
);

export default LinksSection;
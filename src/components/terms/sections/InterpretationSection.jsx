import { motion } from 'framer-motion';

const InterpretationSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Interpretation and Definitions</h2>
    <div className="space-y-6 text-gray-300">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Interpretation</h3>
        <p className="leading-relaxed">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Definitions</h3>
        <ul className="space-y-3">
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Quantam FZ-LLC.
          </li>
          <li>
            <strong>Service</strong> refers to the Website and all services provided by the Company.
          </li>
          <li>
            <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.
          </li>
          <li>
            <strong>Website</strong> refers to Quantam, accessible from www.Quantam.com
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          </li>
        </ul>
      </div>
    </div>
  </motion.section>
);

export default InterpretationSection;
import { motion } from 'framer-motion';

const DisputesSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Disputes Resolution</h2>
    <div className="space-y-4 text-gray-300">
      <p className="leading-relaxed">
        If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
      </p>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">For European Union (EU) Users</h3>
        <p className="leading-relaxed">
          If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">United States Legal Compliance</h3>
        <p className="leading-relaxed">
          You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
        </p>
      </div>
    </div>
  </motion.section>
);

export default DisputesSection;
import { motion } from 'framer-motion';

const SeverabilitySection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h2 className="text-2xl font-medium text-white mb-4">Severability and Waiver</h2>
    <div className="space-y-4 text-gray-300">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Severability</h3>
        <p className="leading-relaxed">
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Waiver</h3>
        <p className="leading-relaxed">
          Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
        </p>
      </div>
    </div>
  </motion.section>
);

export default SeverabilitySection;
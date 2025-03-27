import { motion } from 'framer-motion';

const FeaturesHero = () => (
  <section className="mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="prose prose-invert max-w-none"
    >
      <p className="text-xl leading-relaxed">
      The Ikon Orchestration Platform is a sector-neutral and technology-agnostic solution designed to streamline every aspect of your organization—managerial, operational, and technological. Powered by Machine Learning (ML), Artificial Intelligence (AI), and low-code/no-code development capabilities, Ikon offers unparalleled flexibility to monetize domain expertise and unlock new revenue streams by enabling organizations to build tailored use cases.


      </p>
    </motion.div>
  </section>
);

export default FeaturesHero;
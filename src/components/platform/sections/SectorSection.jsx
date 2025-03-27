import { motion } from "framer-motion";
import { sectors } from "../../sectors/data/sectors";
import SectorCard from "./SectorCard";
import SectorBackground from "../animations/SectorBackground";

const SectorSection = () => (
    <div className="container mx-auto px-4">
      <section id="sectors" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-medium text-white mb-4">
            Industry Solutions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform delivers specialized solutions across various
            industries, combining AI capabilities with deep domain expertise to
            address sector-specific challenges.
          </p>
        </motion.div>

        <div className="relative">
          <SectorBackground />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard key={sector.id} {...sector} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </div>
);

export default SectorSection;

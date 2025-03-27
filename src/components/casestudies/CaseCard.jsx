import { motion } from "framer-motion";
import CaseImage from "./CaseImage";
import CaseInfo from "./CaseInfo";

const CaseCard = ({ name, title, bio, photo, delay = 0, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Mobile: Image always on top | Desktop: Alternates based on index */}
      <div className="w-full md:w-1/3 flex items-center justify-center bg-[#4A5568] md:order-none order-first">
        <CaseImage name={name} photo={photo} />
      </div>

      {/* Mobile: Content below | Desktop: Alternating Position */}
      <div className="flex-1 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
          Case Study
        </p>
        <CaseInfo name={name} title={title} bio={bio} />
      </div>
    </motion.div>
  );
};

export default CaseCard;

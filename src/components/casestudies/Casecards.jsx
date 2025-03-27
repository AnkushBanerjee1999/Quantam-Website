import { motion } from "framer-motion";
import CaseCard from "./CaseCard";
import { casestudiesData } from "./data/casestudiesData";

const Casecards = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 sm:px-12"> {/* Adjusted padding for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16" 
        ></motion.div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
          {casestudiesData.map((member, index) => (
            <CaseCard
              key={member.name}
              {...member}
              delay={index * 0.1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Casecards;

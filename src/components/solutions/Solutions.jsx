import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';
import { solutions } from './data/solutions';

const Solutions = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-medium mb-4">Enterprise Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful AI-driven solutions to transform your business operations and drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.title}
              {...solution}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
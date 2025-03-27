import { motion } from 'framer-motion';

const SpecializedUseCases = () => (
  <section className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-medium text-white mb-6"
    >
      Specialized Use Cases
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Database Management",
          description: "Automates tasks like querying, backups, and monitoring performance metrics."
        },
        {
          title: "Dynamic Scripting",
          description: "Run custom scripts in Nashorn, Python, or JavaScript directly on remote nodes."
        },
        {
          title: "Remote Execution",
          description: "Execute scripts and commands on remote machines without manual intervention."
        },
        {
          title: "Machine Monitoring",
          description: "Real-time insights into system health, resource utilization, and performance bottlenecks."
        },
        {
          title: "AI and ML Pipelines",
          description: "Orchestrates complex AI/ML workflows, from preprocessing to model deployment."
        }
      ].map((useCase, index) => (
        <motion.div
          key={useCase.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
          <p className="text-gray-300 text-sm">{useCase.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SpecializedUseCases;
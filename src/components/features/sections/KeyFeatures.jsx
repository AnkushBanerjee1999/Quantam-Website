import { motion } from 'framer-motion';

const KeyFeatures = () => (
  <section className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-medium text-white mb-6"
    >
      Key Features
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-3">Dynamic Probe System</h3>
        <p className="text-gray-300">Deploy lightweight probes on client machines to execute localized instructions securely and efficiently.</p>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-3">Service-Oriented Architecture</h3>
        <p className="text-gray-300">A robust backend framework that ensures reliability, scalability, and maintainability.</p>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-3">Real-Time Communication</h3>
        <p className="text-gray-300">WebSocket-driven real-time communication enables instant updates, live monitoring, and dynamic interaction.</p>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-3">Cross-Platform Integrations</h3>
        <p className="text-gray-300">Seamlessly connects with databases, cloud services, on-premise servers, and IoT devices.</p>
      </div>
    </div>
  </section>
);

export default KeyFeatures;
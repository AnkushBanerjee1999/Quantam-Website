import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeInLeft } from '../../utils/animations';

const PlatformContent = () => {
  const { t } = useTranslation('common');

  return (
    <motion.div
      {...fadeInLeft}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
        Transforming complexity into opportunity with AI
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-300">
        <div className="space-y-2">
          <h3 className="font-semibold text-indigo-400">Dynamic Integration</h3>
          <p>Real-time communication and seamless integration with databases, cloud services, and IoT devices.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-indigo-400">Intelligent Automation</h3>
          <p>Advanced workflow automation with multi-language scripting support and AI-powered decision making.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-indigo-400">Scalable Architecture</h3>
          <p>Built for enterprise-grade performance with distributed processing and dynamic probe system.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-indigo-400">Digital Transformation</h3>
          <p>Streamline operations and enhance productivity through intelligent process orchestration.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformContent;
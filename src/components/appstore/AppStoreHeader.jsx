import { motion } from "framer-motion";
import { apps } from "./data/apps";
import mainVideo from '../../../public/apps/Quantam Website video.mp4';
const AppStoreHeader = () => {
  return (
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-medium text-white mb-4"
      >
        Ikon AppStore
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-300 mb-8"
      >
        Discover our collection of powerful applications built on the Ikon
        Platform
      </motion.p>
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md overflow-hidden" style={{height: '725px'}}>
        <iframe
          src={mainVideo}
          title="App Video"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 p-4 rounded-lg"
        >
          <div className="text-3xl font-medium text-indigo-500">{apps.length}</div>
          <div className="text-gray-400">Web Applications</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800 p-4 rounded-lg"
        >
          <div className="text-3xl font-medium text-indigo-500">0</div>
          <div className="text-gray-400">Mobile Apps</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 p-4 rounded-lg"
        >
          <div className="text-3xl font-medium text-indigo-500">0</div>
          <div className="text-gray-400">Microservices</div>
        </motion.div>
      </div> */}
    </div>
  );
};

export default AppStoreHeader;

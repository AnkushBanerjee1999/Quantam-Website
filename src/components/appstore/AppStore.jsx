import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import AppGallery from './AppGallery';
import AppStoreHeader from './AppStoreHeader';

const AppStore = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
            <AppStoreHeader />
            <AppGallery />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AppStore;
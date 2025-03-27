import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import RequestDemoForm from './RequestDemoForm';
import DemoIllustration from './animations/DemoIllustration';

const RequestDemo = () => {
  return (
    <div className=" bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium text-white mb-4">
              Request a Demo
            </h1>
            <p className="text-xl text-gray-300">
              Experience the power of Ikon Platform firsthand. Schedule a personalized demo with our team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto p-6 shadow-md rounded-md">
            <RequestDemoForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RequestDemo;
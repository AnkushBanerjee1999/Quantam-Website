import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';
import FeaturesHero from './FeaturesHero';
import CoreCapabilities from './CoreCapabilities';
import KeyFeatures from './KeyFeatures';
import SpecializedUseCases from './SpecializedUseCases';
import AdminControl from './AdminControl';
import DeploymentHosting from './DeploymentHosting';
import AdvancedFeatures from './AdvancedFeatures';
import CompetitiveAdvantages from './CompetitiveAdvantages';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <FeaturesHero />
          <CoreCapabilities />
          <KeyFeatures />
          <SpecializedUseCases />
          <AdminControl />
          <DeploymentHosting />
          <AdvancedFeatures />
          <CompetitiveAdvantages />
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import FeaturesHero from './sections/FeaturesHero';
import CoreCapabilities from './sections/CoreCapabilities';
import KeyFeatures from './sections/KeyFeatures';
import SpecializedUseCases from './sections/SpecializedUseCases';
import AdminControl from './sections/AdminControl';
import DeploymentHosting from './sections/DeploymentHosting';
import AdvancedFeatures from './sections/AdvancedFeatures';
import CompetitiveAdvantages from './sections/CompetitiveAdvantages';
import BusinessBenefits from './sections/BusinessBenefits';

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
          <BusinessBenefits />
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;
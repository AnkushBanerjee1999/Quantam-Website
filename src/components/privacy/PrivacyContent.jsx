import { motion } from 'framer-motion';
import Introduction from './sections/Introduction';
import WhoWeAre from './sections/WhoWeAre';
import PersonalInformation from './sections/PersonalInformation';
import DataUsage from './sections/DataUsage';

const PrivacyContent = () => {
  return (
    <div className="space-y-12">
      <Introduction />
      <WhoWeAre />
      <PersonalInformation />
      <DataUsage />
    </div>
  );
};

export default PrivacyContent;
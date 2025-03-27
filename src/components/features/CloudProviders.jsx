import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import AWSLogo from './logos/AWSLogo';
import AzureLogo from './logos/AzureLogo';
import GCPLogo from './logos/GCPLogo';

const providers = [
  { name: 'AWS', Logo: AWSLogo },
  { name: 'Azure', Logo: AzureLogo },
  { name: 'Google Cloud', Logo: GCPLogo }
];

const CloudProviders = () => (
  <div className="flex justify-center gap-8 mt-8">
    {providers.map((provider, index) => (
      <motion.div
        key={provider.name}
        {...fadeInUp}
        transition={{ delay: index * 0.1 }}
        className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
      >
        <provider.Logo />
        <span>{provider.name}</span>
      </motion.div>
    ))}
  </div>
);

export default CloudProviders;
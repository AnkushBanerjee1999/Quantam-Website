import { motion } from 'framer-motion';
import TeamMembers from './TeamMembers';
import { fadeInUp } from '../../utils/animations';

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h1 className="text-4xl font-medium text-white mb-8">
              Our Mission
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-16">
            The mission is to empower businesses to be transformed through the orchestration of their data, facilitated by AI and agentic AI, to connect systems, enable people, and align processes, ensuring value generation is maximized through improved operational efficiency and enhanced revenue growth.
            </p>

            <h2 className="text-4xl font-medium text-white mb-8">
              Our Vision
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed">
              We aim to be recognized as the preferred technology enabler, empowering businesses across industries to unlock the full potential of data orchestration.
              </p>
              <p className="text-lg leading-relaxed">
              We partner with organizations in Finance, Telecom, Retail, Manufacturing, Engineering, Construction, Travel, Government, and other sectors to deliver advanced AI-driven solutions. Our solutions are dynamic, decentralized, data-focused, automated, and self-learning, designed for seamless application internally or in B2B environments, whether on cloud, on-premise, or in real-time.
              </p>
              <p className="text-lg leading-relaxed italic">
              We focus on solving challenges and creating innovative, AI-powered solutions in collaboration with our partners.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <TeamMembers />
    </div>
  );
};

export default Team;
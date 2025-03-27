import { motion } from 'framer-motion';
import AgentOrbit from './agents/AgentOrbit';
import AgentCore from './agents/AgentCore';
import OrbitPath from './agents/OrbitPath';
import Particle from './agents/Particle';

const HeroIllustration = () => {
  const innerAgents = [
    { role: 'leader', color: 'bg-blue-500/80', delay: 0 },
    { role: 'architect', color: 'bg-purple-500/80', delay: 0.2 },
    { role: 'analyst', color: 'bg-green-500/80', delay: 0.4 }
  ];

  const outerAgents = [
    { role: 'engineer', color: 'bg-red-500/80', delay: 0.1 },
    { role: 'designer', color: 'bg-yellow-500/80', delay: 0.3 },
    { role: 'scientist', color: 'bg-indigo-500/80', delay: 0.5 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-[500px] flex items-center justify-center"
    >
      <AgentCore />
      <AgentOrbit radius={120} duration={20} agents={innerAgents} />
      <AgentOrbit radius={200} duration={30} agents={outerAgents} />

      <svg className="absolute inset-0 w-full h-full" style={{ transform: 'translateZ(0)' }}>
        <OrbitPath radius={120} duration={20} />
        <OrbitPath radius={200} duration={30} />
      </svg>

      {[...Array(12)].map((_, i) => (
        <Particle key={i} />
      ))}
    </motion.div>
  );
};

export default HeroIllustration;
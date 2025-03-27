import React from 'react';
import { motion } from 'framer-motion';
import { agentProfiles } from '../agents/AgentData';
import TerminalHeader from './TerminalHeader';
import TerminalContent from './TerminalContent';

const Terminal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl overflow-hidden"
    >
      <TerminalHeader />
      <TerminalContent agents={Object.values(agentProfiles)} />
    </motion.div>
  );
};

export default Terminal;
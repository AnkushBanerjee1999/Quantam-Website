import React from 'react';
import { motion } from 'framer-motion';
import AgentIntroduction from './AgentIntroduction';
import TypingEffect from './TypingEffect';
import type { AgentProfile } from '../agents/types';

interface Props {
  agents: AgentProfile[];
}

const WELCOME_MESSAGE = `Welcome to Quantam AI Agents! 👋\nHow can our expert team assist you today?\n`;

const TerminalResponse = ({ agents }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-4 space-y-4"
    >
      <TypingEffect text={WELCOME_MESSAGE} />
      <div className="space-y-2">
        {agents.map((agent, index) => (
          <AgentIntroduction
            key={agent.name}
            agent={agent}
            delay={0.5 + index * 0.2}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TerminalResponse;
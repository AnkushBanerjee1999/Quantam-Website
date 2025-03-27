import React from 'react';
import { motion } from 'framer-motion';
import defaultAvatar from '../../assets/default-avatar.svg';
import type { AgentProfile } from '../agents/types';

interface Props {
  agent: AgentProfile;
  delay: number;
}

const AgentIntroduction = ({ agent, delay }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-800/50"
  >
    <img
      src={agent.avatar || defaultAvatar}
      alt={agent.name}
      className="w-10 h-10 rounded-full"
      onError={(e) => {
        e.currentTarget.src = defaultAvatar;
      }}
    />
    <div>
      <div className="flex items-center space-x-2">
        <span className="text-blue-400">{agent.name}</span>
        <span className="text-gray-400">- {agent.title}</span>
      </div>
      <p className="text-green-400 text-sm">{agent.expertise}</p>
    </div>
  </motion.div>
);

export default AgentIntroduction;
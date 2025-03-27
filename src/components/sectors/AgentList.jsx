import { motion } from 'framer-motion';
import { avatars } from '../../assets/avatars';
import defaultAvatar from '../../assets/default-avatar.svg';

const AgentList = ({ agents }) => {
  return (
    <div>
      <h4 className="text-sm font-semibold text-indigo-400 mb-2 font-inter">Specialized Agents</h4>
      <div className="space-y-2">
        {agents.map((agent) => (
          <motion.div
            key={agent.name}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 text-sm"
          >
            <img
              src={avatars[agent.avatar] || defaultAvatar}
              alt={agent.name}
              className="w-8 h-8 rounded-full bg-gray-800 object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = defaultAvatar;
              }}
            />
            <div>
              <p className="text-white font-medium font-inter">{agent.name}</p>
              <p className="text-gray-400 text-xs font-inter">{agent.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AgentList;
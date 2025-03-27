import { motion } from 'framer-motion';
import TeamMemberImage from './TeamMemberImage';
import TeamMemberInfo from './TeamMemberInfo';

const TeamMemberCard = ({ name, title, bio, photo, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row min-h-[400px] md:min-h-[650px]"
    >
      <TeamMemberImage name={name} photo={photo} />
      <TeamMemberInfo name={name} title={title} bio={bio} />
    </motion.div>
  );
};

export default TeamMemberCard;

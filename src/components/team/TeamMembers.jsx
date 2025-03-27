import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';
import { teamData } from './data/teamData';

const TeamMembers = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-medium mb-4">Meet Our Leadership Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our experienced leadership team brings together decades of expertise in technology, 
            business strategy, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {teamData.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
import { motion } from 'framer-motion';
import { UserGroupIcon, ShieldCheckIcon, CreditCardIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'User and Account Management',
    description: 'Role-based access control (RBAC) ensures secure and efficient user management.',
    icon: UserGroupIcon
  },
  {
    title: 'Group and Role Management',
    description: 'Organizes users into hierarchical groups for streamlined permissions and task delegation.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Subscription and Licensing Management',
    description: 'Simplifies software licensing and subscription tracking.',
    icon: CreditCardIcon
  },
  {
    title: 'BPM and Task Management',
    description: 'Handles business process management with task assignments, SLAs, and workflow visualizations.',
    icon: ClipboardDocumentListIcon
  }
];

const AdminControl = () => (
  <section className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-medium text-white mb-6"
    >
    Administrative Control
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <feature.icon className="w-6 h-6 text-indigo-500" />
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
          </div>
          <p className="text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AdminControl;
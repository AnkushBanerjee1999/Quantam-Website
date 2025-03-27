import { useState } from 'react';
import { motion } from 'framer-motion';
import AppCard from './AppCard';
import CategoryFilter from './CategoryFilter';
import useAppStore from './hooks/useAppStore';
import { categories } from './data/apps';

const AppGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { apps } = useAppStore();

  const filteredApps = selectedCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  return (
    <div className="space-y-8">
      <CategoryFilter 
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredApps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <AppCard {...app} />
          </motion.div>
        ))}
      </div>
      </div>
  );
};

export default AppGallery;
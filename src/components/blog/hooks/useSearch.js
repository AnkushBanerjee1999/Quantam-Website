import { useState, useCallback } from 'react';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return { searchQuery, handleSearch };
};
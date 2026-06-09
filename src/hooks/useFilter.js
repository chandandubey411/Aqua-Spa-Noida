import { useState, useMemo } from 'react';

export const useFilter = (items, key) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let result = items;
    if (activeCategory !== 'All') {
      result = result.filter(item => item[key] === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(item =>
        item.title?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.name?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [items, activeCategory, searchQuery, key]);

  return { filtered, activeCategory, setActiveCategory, searchQuery, setSearchQuery };
};

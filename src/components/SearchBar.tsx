// components/SearchBar.js
import React from 'react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  return (
    <div className="p-4 text-black bg-purple-300">
      <Input type="text" placeholder="Search ..." />
    </div>
  );
};

export default SearchBar;

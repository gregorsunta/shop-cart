import React, { useState } from 'react';
import Components from '../../data/Components';

const useFilters = () => {
  const [filters, setFilters] = useState();

  return [filters];
};

export default useFilters;

import React from 'react';
import MuiTextField from './TextField';

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <MuiTextField
      value={filter || ''}
      onChange={(e) => setFilter(e.target.value)}
      label="Search Results"
      sx={{ maxWidth: '250px', mb: 2, mt: { lg: 1, md: 3, xs: 2 } }}
    />
  );
};

export default GlobalFilter;

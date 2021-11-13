import React from 'react';
import { StyledSearchbar } from './styles';

const Searchbar = ({ setSearchInput }) => {
  return (
    <StyledSearchbar
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder="HAVE A QUESTION? SEARCH FOR THE ANSWERS..."
    />
  );
};

export default Searchbar;

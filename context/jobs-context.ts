/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { FiltersContextState } from '../types';

const contextDefaultValues: FiltersContextState = {
  filters: [],
  addFilter: () => {},
  removeFilter: () => {},
  removeAll: () => {},
};

const jobsContext = React.createContext(contextDefaultValues);

export default jobsContext;

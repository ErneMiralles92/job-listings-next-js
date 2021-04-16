/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext } from 'react';

type FiltersContextState = {
  filters: string[];
  addFilter: (name: string) => void;
  removeFilter: (name: string) => void;
  removeAll: () => void;
};

const contextDefaultValues: FiltersContextState = {
  filters: [],
  addFilter: () => {},
  removeFilter: () => {},
  removeAll: () => {},
};

const jobsContext = React.createContext(contextDefaultValues);
export const useJobsContext = (): FiltersContextState => useContext(jobsContext);
export default jobsContext.Provider;

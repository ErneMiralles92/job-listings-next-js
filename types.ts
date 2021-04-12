export type FiltersContextState = {
  filters: string[];
  addFilter: (name: string) => void;
  removeFilter: (name: string) => void;
  removeAll: () => void;
};

export interface EntityStateModel<T> {
  loaded: boolean;
  item: T;
  list: T[];
  searchTerm: string;
  filtered: string[];
  selected: string[];
}

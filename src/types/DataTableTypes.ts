export interface FilterOptionType {
  id: string;
  label: string;
  type: "select" | "date" | "text";
  options?: string[]; // For select type
  placeholder?: string; // For text type
}

export interface FilterBarPropsType {
  title: string;
  filters: FilterOptionType[];
  onFilterApply: (filters: Record<string, string>) => void;
  onReset: () => void;
}

export interface ColumnType {
  key: string;
  title: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
  hidden?: boolean;
  searchable?: boolean;
}

export interface DataTablePropsType {
  columns: ColumnType[];
  data: any[];
  totalRecords: number;
  currentPage: number;
  limit: number;
  onPageChange: (page: number) => void;
  onlimitChange?: (limit: number) => void;
  isLoading?: boolean;
  filterConfig?: {
    title: string;
    filters: FilterOptionType[];
  };
  activeFilters?: Record<string, string>;
  setActiveFilters?: (filters: Record<string, string>) => void;
}

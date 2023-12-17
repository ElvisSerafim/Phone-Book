export interface PaginationProps {
  page: number;
  total: number;
  size: number;
  setPage: (_page: number) => void;
}

export type Action = "prev" | "next";

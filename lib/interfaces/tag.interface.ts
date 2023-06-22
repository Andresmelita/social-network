// Generated by https://quicktype.io

export interface TagsResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  currentPage: number;
  results: Tag[];
}

export interface Tag {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}
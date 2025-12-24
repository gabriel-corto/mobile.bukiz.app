export interface ApiResponse<T> {
  data: T;
  message?: string;
  statusCode: number;
}

export interface ApiPageDataResponse<T> {
  data: T[];
  metadata: Metadata;
}

export interface Metadata {
  page: number;
  total: number;
}

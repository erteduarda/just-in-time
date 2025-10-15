export type User = { id: string; email: string };
export type Order = { id: string; userId: string; total: number };

export type ApiResponse<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

// src/types/auth/LoginResponse.ts
export interface User {
  id: number;
  name?: string;
  email?: string;
}

export interface LoginResponse {
  token: string;
  user: User
}
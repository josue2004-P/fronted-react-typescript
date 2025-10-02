export interface AuthState {
  id?: string;
  token?: string;
  profiles?: string[];
  isLoggedIn: boolean;
  error: string | null;
  checking: boolean; // 👈 nuevo
}

import { useSelector } from 'react-redux';

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
}

export function useAuth() {
  const auth = localStorage.getItem('token') ? true : useSelector((state: RootState) => state.auth.isAuthenticated);
  return auth;
}
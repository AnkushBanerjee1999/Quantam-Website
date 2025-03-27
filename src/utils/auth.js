import { Navigate } from 'react-router-dom';

export const ROLES = {
  WEBMASTER: 'webmaster',
  USER: 'user'
};

export const isWebmaster = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === ROLES.WEBMASTER;
  } catch {
    return false;
  }
};

export const ProtectedRoute = ({ children }) => {
  if (!isWebmaster()) {
    return <Navigate to="/blog" replace />;
  }
  return children;
};

// Helper functions for testing
export const loginAsWebmaster = () => {
  localStorage.setItem('user', JSON.stringify({
    id: '1',
    role: ROLES.WEBMASTER,
    name: 'Admin'
  }));
};

export const logout = () => {
  localStorage.removeItem('user');
};
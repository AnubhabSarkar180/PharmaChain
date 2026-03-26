import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userRole, setUserRole] = useState(() => {
    // Check local storage for an existing session on load
    return localStorage.getItem('pharmaRole') || null;
  });

  const login = (role) => {
    setUserRole(role);
    localStorage.setItem('pharmaRole', role);
  };

  const logout = () => {
    setUserRole(null);
    localStorage.removeItem('pharmaRole');
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

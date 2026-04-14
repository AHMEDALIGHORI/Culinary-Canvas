import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Check token on mount
    const token = localStorage.getItem('jwt_token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser(payload);
        setIsAuthenticated(true);
      } catch (err) {
        localStorage.removeItem('jwt_token');
      }
    }
  }, []);

  const login = async (email, password) => {
    // Mock Authentication Logic
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockPayload = { id: 1, email, name: 'Guest User', exp: Math.floor(Date.now() / 1000) + (60 * 60) };
        const base64Header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
        const base64Payload = btoa(JSON.stringify(mockPayload));
        const fakeToken = `${base64Header}.${base64Payload}.MOCK_SIGNATURE`;

        localStorage.setItem('jwt_token', fakeToken);
        setUser(mockPayload);
        setIsAuthenticated(true);
        resolve(true);
      }, 500); // Small network simulation
    });
  };

  const logout = () => {
    localStorage.removeItem('jwt_token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

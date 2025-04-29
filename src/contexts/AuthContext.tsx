import React, { createContext, useContext, useState, useEffect } from 'react';

// Define types for our user and context
type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
};

// Create context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // This is a simplified mock login
    // In a real app, this would call an API
    setIsLoading(true);
    try {
      // Mock authentication delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, we're just checking if the password is not empty
      if (!password) {
        throw new Error('Invalid credentials');
      }

      const newUser = { id: `user-${Date.now()}`, email };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    // This is a simplified mock registration
    setIsLoading(true);
    try {
      // Mock registration delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      const newUser = { id: `user-${Date.now()}`, email, name };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

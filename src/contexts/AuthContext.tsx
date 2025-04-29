import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { auth, googleProvider, facebookProvider } from '@/lib/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User as FirebaseUser,
  AuthProvider as FirebaseAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';

// Define local User model with additional fields if needed
type User = {
  id: string;
  email: string;
  name?: string;
  provider?: string;
  photoUrl?: string;
  emailVerified?: boolean;
};

// Define context shape
type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  loginWithSocial: (provider: 'google' | 'facebook') => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Extract user info from FirebaseUser
const mapFirebaseUser = (fbUser: FirebaseUser): User => ({
  id: fbUser.uid,
  email: fbUser.email || '',
  name: fbUser.displayName || undefined,
  provider: fbUser.providerData[0]?.providerId,
  photoUrl: fbUser.photoURL || undefined,
  emailVerified: fbUser.emailVerified,
});

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Observe auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        const mappedUser = mapFirebaseUser(fbUser);
        setUser(mappedUser);
        localStorage.setItem('user', JSON.stringify(mappedUser));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Email/password login
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const mappedUser = mapFirebaseUser(result.user);
      setUser(mappedUser);
      localStorage.setItem('user', JSON.stringify(mappedUser));
    } catch (error) {
      console.error('Login Error:', error.message);
      throw error; // Propagate error for UI handling
    } finally {
      setIsLoading(false);
    }
  };

  // Email/password registration
  const register = async (email: string, password: string, name?: string) => {
    setIsLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (name && result.user) {
        await updateProfile(result.user, { displayName: name });
      }

      const mappedUser = mapFirebaseUser(result.user);
      setUser(mappedUser);
      localStorage.setItem('user', JSON.stringify(mappedUser));
    } catch (error) {
      console.error('Registration Error:', error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent.');
    } catch (error) {
      console.error('Reset Password Error:', error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Social login
  const loginWithSocial = async (provider: 'google' | 'facebook') => {
    setIsLoading(true);
    try {
      let authProvider: FirebaseAuthProvider;

      switch (provider) {
        case 'google':
          authProvider = googleProvider;
          break;
        case 'facebook':
          authProvider = facebookProvider;
          break;
        default:
          throw new Error('Unsupported provider');
      }

      const result = await signInWithPopup(auth, authProvider);
      const mappedUser = mapFirebaseUser(result.user);
      setUser(mappedUser);
      localStorage.setItem('user', JSON.stringify(mappedUser));
    } catch (error) {
      console.error('Social login error:', error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        loginWithSocial,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook for using auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

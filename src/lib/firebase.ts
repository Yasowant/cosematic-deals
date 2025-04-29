import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  AuthProvider,
} from 'firebase/auth';

// Load config from .env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Setup social auth providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
googleProvider.addScope('email');
facebookProvider.addScope('email');

export const signInWithSocial = async (provider: 'google' | 'facebook') => {
  try {
    let authProvider: AuthProvider;

    if (provider === 'google') {
      authProvider = googleProvider;
    } else {
      authProvider = facebookProvider;
    }

    const result = await signInWithPopup(auth, authProvider);
    const user = result.user;
    console.log('Logged in with', user);
  } catch (error: any) {
    console.error('Error during social login:', error.message);
    // Handle user-friendly display here
  }
};

export { auth, googleProvider, facebookProvider };

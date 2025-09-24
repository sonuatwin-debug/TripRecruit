import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const initializeAnalytics = () => {
    if (typeof window !== 'undefined') {
        return isSupported().then(yes => {
            if (yes && firebaseConfig.measurementId) {
                console.log('Firebase Analytics is supported and initialized.');
                return getAnalytics(app);
            } else {
                console.log('Firebase Analytics is not supported in this environment or measurementId is missing.');
                return null;
            }
        });
    }
    return Promise.resolve(null);
};

export { app, initializeAnalytics };

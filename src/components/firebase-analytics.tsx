'use client';

import { useEffect } from 'react';
import { initializeApp, getApps } from 'firebase/app';
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

function FirebaseAnalytics() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (getApps().length === 0) {
        const app = initializeApp(firebaseConfig);
        isSupported().then((supported) => {
          if (supported && firebaseConfig.measurementId) {
            getAnalytics(app);
            console.log('Firebase Analytics initialized successfully.');
          } else {
            console.log('Firebase Analytics is not supported in this environment or measurementId is missing.');
          }
        });
      }
    }
  }, []);

  return null;
}

export default FirebaseAnalytics;

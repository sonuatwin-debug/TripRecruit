// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
import type { FirebaseApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7IW11tIuX1rk1o8KZjv4UmUTawrfQKB4",
  authDomain: "triprecruit.firebaseapp.com",
  projectId: "triprecruit",
  storageBucket: "triprecruit.firebasestorage.app",
  messagingSenderId: "947885197929",
  appId: "1:947885197929:web:f1d1e77654495877a5b0f8",
  measurementId: "G-NYZXL0V3H2"
};

// Initialize Firebase
let app: FirebaseApp;
let analytics: Analytics | undefined;

if (typeof window !== 'undefined') {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  } else {
    app = getApp();
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  }
} else {
    if (getApps().length === 0) {
        app = initializeApp(firebaseConfig);
    } else {
        app = getApp();
    }
}


export { app, analytics };

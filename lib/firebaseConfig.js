// lib/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0TQSNuKDrHLnfn9sX-et649eI8eG0e6M",
    authDomain: "pantry-tracking-8da1d.firebaseapp.com",
    projectId: "pantry-tracking-8da1d",
    storageBucket: "pantry-tracking-8da1d.appspot.com",
    messagingSenderId: "654853948998",
    appId: "1:654853948998:web:5f17c56efda574d1bc6c47",
    measurementId: "G-VZ4WN2M69D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get Firestore and Auth instances
export const db = getFirestore(app);
export const auth = getAuth(app);

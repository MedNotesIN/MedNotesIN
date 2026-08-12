
// Firebase Configuration
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTcG-lYPVB-N1oCNy3lIlUVKAcnPBr-Ig",
  authDomain: "mednotesin-6add1.firebaseapp.com",
  databaseURL: "https://mednotesin-6add1-default-rtdb.firebaseio.com",
  projectId: "mednotesin-6add1",
  storageBucket: "mednotesin-6add1.firebasestorage.app",
  messagingSenderId: "239374270334",
  appId: "1:239374270334:web:e85ba5cbe28d6b62aefd2f",
  measurementId: "G-EMNQ7LQVEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, firestore, storage };

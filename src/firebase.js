import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDEDHjFR3VZXjuYemEX3qXdVLOe5T4QiM",
  authDomain: "sharq-logistics.firebaseapp.com",
  projectId: "sharq-logistics",
  storageBucket: "sharq-logistics.firebasestorage.app",
  messagingSenderId: "589414129711",
  appId: "1:589414129711:web:5a8748384299afa968a6da",
  measurementId: "G-5LN047LTRG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // قاعدة البيانات
export const auth = getAuth(app);    // نظام تسجيل الدخول
export const storage = getStorage(app); // لرفع صور الرخص
 

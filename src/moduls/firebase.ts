// src/firebase/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase web app configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyC_w70x7SYzWT-peKjiKuH6kY98PPxz-bk",
  authDomain: "amaranoc-b8fd0.firebaseapp.com",
  projectId: "amaranoc-b8fd0",
  storageBucket: "amaranoc-b8fd0.firebasestorage.app",
  messagingSenderId: "965042758536",
  appId: "1:965042758536:web:e8ca17232232f32cc6103d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Generic fetch function for any collection
export const getCollection = async (name: string) => {
  const snapshot = await getDocs(collection(db, name));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

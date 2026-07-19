import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_w70x7SYzWT-peKjiKuH6kY98PPxz-bk",
  authDomain: "amaranoc-b8fd0.firebaseapp.com",
  projectId: "amaranoc-b8fd0",
  storageBucket: "amaranoc-b8fd0.firebasestorage.app",
  messagingSenderId: "965042758536",
  appId: "1:965042758536:web:e8ca17232232f32cc6103d"
};

// Եթե դեռ չկան initialized apps, ստեղծում ենք մեկը
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
// անմիջապես օգտագործում ենք
export const db = getFirestore();

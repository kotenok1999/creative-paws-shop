import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBRU1BvB82PogOCihTczJRqR5tt7foufzc",
  authDomain: "shop-7f7e2.firebaseapp.com",
  projectId: "магазин-7f7e2",
  storageBucket: "shop-7f7e2.firebasestorage.app",
  messagingSenderId: "670165686691",
  appId: "1:670165686691:web:fe255a21e5abdd275ba216"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
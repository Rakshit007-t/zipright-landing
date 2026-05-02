import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5-_85r35Gdil45A1723C4bShmQczGrnQ",
  authDomain: "zipright-waitlist.firebaseapp.com",
  projectId: "zipright-waitlist",
  storageBucket: "zipright-waitlist.firebasestorage.app",
  messagingSenderId: "317874816034",
  appId: "1:317874816034:web:2d571a823e688deb52367b",
  measurementId: "G-W1L91H8H3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

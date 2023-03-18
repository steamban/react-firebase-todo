// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_AUTH_DOMAIN}`,
  // apiKey: 'AIzaSyAA52s0bf0H0v70G2oA3WzJoNU6jL8T8OQ',
  // authDomain: 'todo-app-4cdd6.firebaseapp.com',
  projectId: "todo-app-4cdd6",
  storageBucket: "todo-app-4cdd6.appspot.com",
  messagingSenderId: "3571556670",
  appId: "1:3571556670:web:a6f2eb9a2926a77266cc6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
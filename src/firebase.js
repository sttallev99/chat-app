import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAd03R-ct-7gzDzXdBsDpPqDa7jI5dOuf8",
  authDomain: "chat-bc779.firebaseapp.com",
  projectId: "chat-bc779",
  storageBucket: "chat-bc779.appspot.com",
  messagingSenderId: "38555355084",
  appId: "1:38555355084:web:3eb1bdf6c5d945ed263f69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
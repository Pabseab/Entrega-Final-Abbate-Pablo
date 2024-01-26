
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Mefl9_WimmIjpILFAjM4Zir00VlirAM",
  authDomain: "proyecto-final-41750.firebaseapp.com",
  projectId: "proyecto-final-41750",
  storageBucket: "proyecto-final-41750.appspot.com",
  messagingSenderId: "233861360238",
  appId: "1:233861360238:web:d9a18a6d7dadade9e0947f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const dataBase = getFirestore()

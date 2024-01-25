import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
//import './index.css'
import "./App.css"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9Mefl9_WimmIjpILFAjM4Zir00VlirAM",
  authDomain: "proyecto-final-41750.firebaseapp.com",
  projectId: "proyecto-final-41750",
  storageBucket: "proyecto-final-41750.appspot.com",
  messagingSenderId: "233861360238",
  appId: "1:233861360238:web:d9a18a6d7dadade9e0947f"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container-fluid'>
      <App />
    </div>
  </React.StrictMode>,
)

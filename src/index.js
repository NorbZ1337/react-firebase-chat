import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDC526ifJx38E5YHe8_CMrxKsiLV9GLp3Y",
  authDomain: "chat-react-b799b.firebaseapp.com",
  projectId: "chat-react-b799b",
  storageBucket: "chat-react-b799b.appspot.com",
  messagingSenderId: "684840893421",
  appId: "1:684840893421:web:9319e7a556327d1cc0c5e4",
  measurementId: "G-RRN5M7FVEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const Context = createContext(null)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value={{firebase, auth, firestore}}>
        <App />
      </Context.Provider>
  </React.StrictMode>
);

export default Context
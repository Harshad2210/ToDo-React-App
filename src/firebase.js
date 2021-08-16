// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAP7Y-gwfWcUpo0uVOjtx-P_kMk1nY8Nmk",
  authDomain: "todo-react-app-a69b8.firebaseapp.com",
  projectId: "todo-react-app-a69b8",
  storageBucket: "todo-react-app-a69b8.appspot.com",
  messagingSenderId: "951580240513",
  appId: "1:951580240513:web:5e67643f0ab323157bfb80",
  measurementId: "G-MB7F1WBK1G"
});

const db = firebaseApp.firestore();

export default db;
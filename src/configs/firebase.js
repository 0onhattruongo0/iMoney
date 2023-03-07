import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3dHc5AgXIoKto_c72A6vdPAsfw4U7faw",
  authDomain: "imoney-46410.firebaseapp.com",
  projectId: "imoney-46410",
  storageBucket: "imoney-46410.appspot.com",
  messagingSenderId: "740779410723",
  appId: "1:740779410723:web:7ad9dfb6d4cd323371f896",
  measurementId: "G-JKX0W9FV5K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFireStoreCore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFireStoreCore, timestamp };

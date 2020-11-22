import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAXssFxBiNqeM0sBfetQWcKHbbK0TP3thE",
    authDomain: "test-881d7.firebaseapp.com",
    databaseURL: "https://test-881d7.firebaseio.com",
    projectId: "test-881d7",
    storageBucket: "test-881d7.appspot.com",
    messagingSenderId: "23273711229",
    appId: "1:23273711229:web:4789139fd3e88cf4247314",
    measurementId: "G-5QQ1V9GERH"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
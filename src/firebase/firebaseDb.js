import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzahvBypJjn-VkGGNnXOU9TwZWyE9ifC8",
  authDomain: "smidig-prosjekt-38d3e.firebaseapp.com",
  projectId: "smidig-prosjekt-38d3e",
  storageBucket: "smidig-prosjekt-38d3e.appspot.com",
  messagingSenderId: "55039023697",
  appId: "1:55039023697:web:b0aa4365dc526db75d3670",
};
firebase.initializeApp(firebaseConfig);

let db = firebase;

export default db;

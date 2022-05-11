// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKuDuoTvckMv_grCBMB0PF_4BSzG-LgW0",
    authDomain: "react-hooks-blog-ac787.firebaseapp.com",
    projectId: "react-hooks-blog-ac787",
    storageBucket: "react-hooks-blog-ac787.appspot.com",
    messagingSenderId: "1020300534934",
    appId: "1:1020300534934:web:54ab04cbe09c7d9cfc8eb7",
    measurementId: "G-3DBKDY81Z1"
};

// Initialize Firebase  
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(); 
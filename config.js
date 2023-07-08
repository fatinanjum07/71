import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCHBxoW7NUkZiBzEIFD8zwAXS3esDyL6_I",
    authDomain: "bicycles-1cfe6.firebaseapp.com",
    projectId: "bicycles-1cfe6",
    storageBucket: "bicycles-1cfe6.appspot.com",
    messagingSenderId: "966652721622",
    appId: "1:966652721622:web:f43caf92d44366bccf4c77"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

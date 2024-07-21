// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCxy2GyjLoC7LqpfVIkHu2N1QG41DCyjI",
    authDomain: "e-comm-112a6.firebaseapp.com",
    projectId: "e-comm-112a6",
    storageBucket: "e-comm-112a6.appspot.com",
    messagingSenderId: "786201061218",
    appId: "1:786201061218:web:806e32018939c590e46e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";import {getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC511P07UmHsZcTZYshVXNGdMKX9tr-Yv8",
    authDomain: "todo-app-eef4b.firebaseapp.com",
    projectId: "todo-app-eef4b",
    storageBucket: "todo-app-eef4b.appspot.com",
    messagingSenderId: "665446531255",
    appId: "1:665446531255:web:c94430e725277e34218d32",
    measurementId: "G-SE7VR7YHNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

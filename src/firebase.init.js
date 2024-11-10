// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Don't share config file in public
const firebaseConfig = {
  apiKey: "AIzaSyCxCxfNy3bZiniu9oflEzPkRFiCeve1SCQ",
  authDomain: "email-password-auth-ee2d8.firebaseapp.com",
  projectId: "email-password-auth-ee2d8",
  storageBucket: "email-password-auth-ee2d8.firebasestorage.app",
  messagingSenderId: "1049414714785",
  appId: "1:1049414714785:web:e620018bee693b40af37e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth
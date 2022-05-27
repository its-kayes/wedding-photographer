// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArG1IfPHRXHx3IT7dnXd3SGSrJTYRktcU",
  authDomain: "wedding-photographer-abrar.firebaseapp.com",
  projectId: "wedding-photographer-abrar",
  storageBucket: "wedding-photographer-abrar.appspot.com",
  messagingSenderId: "695889157258",
  appId: "1:695889157258:web:34834375304f3de033a173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
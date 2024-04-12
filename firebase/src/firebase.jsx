// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/app';
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOiW0YdLvNnBr8lL6zznIZ3q3TzWqhxO8",
  authDomain: "nareshreact-51c1b.firebaseapp.com",
  projectId: "nareshreact-51c1b",
  storageBucket: "nareshreact-51c1b.appspot.com",
  messagingSenderId: "785373355931",
  appId: "1:785373355931:web:a7e502d7ce3f2c3e818b3e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();


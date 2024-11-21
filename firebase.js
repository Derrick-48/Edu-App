// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhlWZvQAoekozvoFqJtQWggvpgSDcZRNE",
  authDomain: "eduapp-149b5.firebaseapp.com",
  projectId: "eduapp-149b5",
  storageBucket: "eduapp-149b5.firebasestorage.app",
  messagingSenderId: "426814299620",
  appId: "1:426814299620:web:67021385b4fca2eeebfbf1",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
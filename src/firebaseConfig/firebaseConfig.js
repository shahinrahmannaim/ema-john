// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXoGF5Zb8lVhKdZUsq-4i55qL-hoomWi0",
  authDomain: "ema-jhon-d3b07.firebaseapp.com",
  projectId: "ema-jhon-d3b07",
  storageBucket: "ema-jhon-d3b07.appspot.com",
  messagingSenderId: "304733489610",
  appId: "1:304733489610:web:2219e7d526f68258772733",
  measurementId: "G-XJ7KVY1F7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  export default firebaseConfig;
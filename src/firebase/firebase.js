// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaifSSgcA0wq1M4xhg2gFecNChAG42z6s",
  authDomain: "dell-basketball.firebaseapp.com",
  projectId: "dell-basketball",
  storageBucket: "dell-basketball.firebasestorage.app",
  messagingSenderId: "271041214189",
  appId: "1:271041214189:web:8dd7c21a2d634d36a73ee4",
  measurementId: "G-R60BZ20EC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

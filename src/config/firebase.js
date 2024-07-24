// Import the needed functions from the required SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAapiEW2JE8j1RvVi06PAKWfmWR-rigW2c",
    authDomain: "quick-trade-88706.firebaseapp.com",
    projectId: "quick-trade-88706",
    storageBucket: "quick-trade-88706.appspot.com",
    messagingSenderId: "574170494704",
    appId: "1:574170494704:web:f0b7f8431d3d22bea47435",
    measurementId: "G-XTEBH4C1BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

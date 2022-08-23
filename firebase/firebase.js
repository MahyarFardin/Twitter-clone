import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyAp92X2XLmPZc3IVBpyEAF-GzVsLjriiHg",

  authDomain: "twitter-clone-d2b94.firebaseapp.com",

  projectId: "twitter-clone-d2b94",

  storageBucket: "twitter-clone-d2b94.appspot.com",

  messagingSenderId: "766397607926",

  appId: "1:766397607926:web:7a68309dbac1a4a8b9a1d7",

  measurementId: "G-SZ12KTV29L"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'it';
const provider = new GoogleAuthProvider();
export {auth, provider}
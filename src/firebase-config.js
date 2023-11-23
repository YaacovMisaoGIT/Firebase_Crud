import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDTCNcVfOZ77yue7JrfOfkQYgpRugD_tnQ",
    authDomain: "fir-tutorial-93e5e.firebaseapp.com",
    projectId: "fir-tutorial-93e5e",
    storageBucket: "fir-tutorial-93e5e.appspot.com",
    messagingSenderId: "285523070671",
    appId: "1:285523070671:web:61567dfba021335e78b1ba",
    measurementId: "G-VTDHNS0T09"
  };

// Iitialize Firebase
const app = initializeApp(firebaseConfig);  

export const db = getFirestore(app);
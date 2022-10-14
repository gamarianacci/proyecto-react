import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsroXDRBSGOsnBsCwUMVfoLyOCEpBeCVQ",
    authDomain: "proyecto-react-b5d33.firebaseapp.com",
    projectId: "proyecto-react-b5d33",
    storageBucket: "proyecto-react-b5d33.appspot.com",
    messagingSenderId: "2037569734",
    appId: "1:2037569734:web:a6ccf32b2dd54f38515fc7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const products = 'products';
export const sales = 'sales';
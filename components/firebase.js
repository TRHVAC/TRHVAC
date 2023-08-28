// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK06s_a8GlH5506Vbry_CctiXxOnSwDC8",
  authDomain: "trhvac-69fc0.firebaseapp.com",
  projectId: "trhvac-69fc0",
  storageBucket: "trhvac-69fc0.appspot.com",
  messagingSenderId: "564224346141",
  appId: "1:564224346141:web:a48eb83f18ff2902addef4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIGOR0BLdYcpqG7efYw79Cs-nLc7sXMuo",
  authDomain: "to-do-ee6a3.firebaseapp.com",
  projectId: "to-do-ee6a3",
  storageBucket: "to-do-ee6a3.appspot.com",
  messagingSenderId: "846075376861",
  appId: "1:846075376861:web:ceda8ee75122b797a59734"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 export default auth;

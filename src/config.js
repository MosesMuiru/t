
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDDb-owKbSMlfj1xR90kvKOtqGbXTsS9ww",
  authDomain: "milestone2-1c82a.firebaseapp.com",
  projectId: "milestone2-1c82a",
  storageBucket: "milestone2-1c82a.appspot.com",
  messagingSenderId: "156706530675",
  appId: "1:156706530675:web:400ed59c1375d123729106",
  measurementId: "G-MPTG82V6M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};
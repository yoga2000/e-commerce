import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2EwF4rUqiwkDWw9oP3JZUmSl7kRq_Dnc",
  authDomain: "e-commerce-f3807.firebaseapp.com",
  projectId: "e-commerce-f3807",
  storageBucket: "e-commerce-f3807.appspot.com",
  messagingSenderId: "504096008631",
  appId: "1:504096008631:web:7272066ed45b29dfa1a032",
  measurementId: "G-PBS0MVPSZQ",
};

// Initialize Firebaser
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

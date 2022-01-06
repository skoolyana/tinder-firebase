import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD7CyBvdJK1Tnv1NL6ikwcvWVQfsYmS6oA",
  authDomain: "tinder-firebase-d7351.firebaseapp.com",
  projectId: "tinder-firebase-d7351",
  storageBucket: "tinder-firebase-d7351.appspot.com",
  messagingSenderId: "287401783635",
  appId: "1:287401783635:web:f0a5de2499bc7504a2b1a6",
  measurementId: "G-8H0RKFR5Z6",
};

const firebaseApp = firebase.default.initializeApp(firebaseConfig); 
const database = getFirestore(firebaseApp);

export default database;  
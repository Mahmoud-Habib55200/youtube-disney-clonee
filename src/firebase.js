import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKWz4Aw0VuMOWdIl4KDVO5_8qqir0nR2A",
  authDomain: "fire-10608.firebaseapp.com",
  projectId: "fire-10608",
  storageBucket: "fire-10608.appspot.com",
  messagingSenderId: "509912494523",
  appId: "1:509912494523:web:6e634c92ce361a826a949e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
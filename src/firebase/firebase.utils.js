import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAtglhVmLqJsphQURmlbeYWs2X4XYxiSs4",
    authDomain: "crwn-db-ab41c.firebaseapp.com",
    databaseURL: "https://crwn-db-ab41c.firebaseio.com",
    projectId: "crwn-db-ab41c",
    storageBucket: "",
    messagingSenderId: "1034410004413",
    appId: "1:1034410004413:web:639c07d8c853b4d4"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

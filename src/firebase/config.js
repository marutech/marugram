import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJEN_gkO1PQX8RVBJ7eVRwXeQSUocjETA",
  authDomain: "maru-gram.firebaseapp.com",
  projectId: "maru-gram",
  storageBucket: "maru-gram.appspot.com",
  messagingSenderId: "679479753395",
  appId: "1:679479753395:web:08a0aa1baa8aab2e4a4ec6"
};

// Initialize Firebase
/* const app */ firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

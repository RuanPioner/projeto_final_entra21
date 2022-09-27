import firebase from "firebase/app";
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'


const firebaseConfig = {

  apiKey: "AIzaSyCGoNKefjoeEk8J6PiVKZJ4rpuQoK4PEXQ",
  authDomain: "medpill-ee6db.firebaseapp.com",
  projectId: "medpill-ee6db",
  storageBucket: "medpill-ee6db.appspot.com",
  messagingSenderId: "84451818385",
  appId: "1:84451818385:web:6a3d3c6bbc7734264ff830"

};

firebase.initializeApp(firebaseConfig);
//const database = firebase.firestore()
export default firebase;
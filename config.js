import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDA7JzSwwY-z6UOoOlO3WCj9Ia1JJ9SnRY",
    authDomain: "project-71-e1e17.firebaseapp.com",
    projectId: "project-71-e1e17",
    storageBucket: "project-71-e1e17.appspot.com",
    messagingSenderId: "150257981619",
    appId: "1:150257981619:web:970a79fd1d89d46450f8c6"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

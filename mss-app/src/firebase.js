import firebase from "firebase"
  
// Configuration keys for our message app

const firebaseConfig = {
  apiKey: "AIzaSyBJeae1XQhVB3Loj6II7EQRwdq2HBsJTOI",
  authDomain: "messapp-ba3f8.firebaseapp.com",
  projectId: "messapp-ba3f8",
  storageBucket: "messapp-ba3f8.appspot.com",
  messagingSenderId: "671116767769",
  appId: "1:671116767769:web:0fb2a437e0c72cd811f088",
  measurementId: "G-XBJWG2JJ2R"
  };

  // code to initialise app
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // invoking our database
  const db =firebaseApp.firestore();

  // invoking our authentication service

  const auth =firebase.auth();

  // google auth provider setup
  const provider = new firebase.auth.GoogleAuthProvider()

  //exporting our instances so that we can use them any where in our project
    export {auth,provider};
    export default db;
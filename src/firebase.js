import firebase from 'firebase';

// import {getFirestore} from 'firebase/firestore';
// import  'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAankVJK9C6z00J_kwNknH1aVQ3bT_6dM4",
    authDomain: "slack-clone-a59d0.firebaseapp.com",
    projectId: "slack-clone-a59d0",
    storageBucket: "slack-clone-a59d0.appspot.com",
    messagingSenderId: "639816441874",
    appId: "1:639816441874:web:9073b50c64b1d8c7e278cb",
  };

  
  
  // Initialize Firebase


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const  db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider ,db}; 
//   export const db = getFirestore(firebaseApp);
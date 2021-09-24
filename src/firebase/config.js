import  firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD6LdPCYqQ7x4EskswlC5xJtif_sdzn2Nw",
    authDomain: "ninja-firegram-bfd17.firebaseapp.com",
    projectId: "ninja-firegram-bfd17",
    storageBucket: "ninja-firegram-bfd17.appspot.com",
    messagingSenderId: "922021042754",
    appId: "1:922021042754:web:96b610e904ff2bac60abdb"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

 export const projectFirestore = firebase.firestore()
  export const projectStorage = firebase.storage()
  export const timestamps = firebase.firestore.FieldValue.serverTimestamp;


  // export {projectStorage , projectFirestore , timestamps}


  // import firebase from 'firebase/compat/app';
  // import 'firebase/firestore';
  // import {
  //   initializeApp
  // }
  // from "firebase/app";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries
  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyD6LdPCYqQ7x4EskswlC5xJtif_sdzn2Nw",
  //   authDomain: "ninja-firegram-bfd17.firebaseapp.com",
  //   projectId: "ninja-firegram-bfd17",
  //   storageBucket: "ninja-firegram-bfd17.appspot.com",
  //   messagingSenderId: "922021042754",
  //   appId: "1:922021042754:web:96b610e904ff2bac60abdb"
  // };
  // // Initialize Firebase
  
  // const app = initializeApp(firebaseConfig);
  // const db = firebase.firestore();
  // export {
  //   db
  // };


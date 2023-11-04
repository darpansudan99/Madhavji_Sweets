// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// import {getFirestore} from "@firebase/firestore";
// import firebase from 'firebase/app';
// import 'firebase/auth';

// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBrx9D6TsVfrYbD9MzBRC0JVuLfWjYNxFU",
//   authDomain: "mithaiman-22a3d.firebaseapp.com",
//   projectId: "mithaiman-22a3d",
//   storageBucket: "mithaiman-22a3d.appspot.com",
//   messagingSenderId: "390811556787",
//   appId: "1:390811556787:web:b948cd15b0abf0180109c6",
//   measurementId: "G-2QYC5612ZM"
// };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// // export const firestore = getFirestore(app);


// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();

// firebase.js





// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrx9D6TsVfrYbD9MzBRC0JVuLfWjYNxFU",
    authDomain: "mithaiman-22a3d.firebaseapp.com",
    projectId: "mithaiman-22a3d",
    storageBucket: "mithaiman-22a3d.appspot.com",
    messagingSenderId: "390811556787",
    appId: "1:390811556787:web:b948cd15b0abf0180109c6",
    measurementId: "G-2QYC5612ZM"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

setPersistence(auth, browserSessionPersistence);

export { firebaseApp , auth };



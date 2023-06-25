import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { API_KEY, PROJECT_ID, SENDER_ID, APP_ID, MEASUREMENT_ID } from 'react-native-dotenv';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: PROJECT_ID + '.firebaseapp.com',
  databaseURL: 'https://' + PROJECT_ID + '.firebaseio.com',
  projectId: PROJECT_ID,
  storageBucket: PROJECT_ID + '.appspot.com',
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);



// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }


// export app;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

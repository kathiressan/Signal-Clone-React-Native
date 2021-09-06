import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6qQucv4E0S5WLpGEFihZunClXeNbfVz4",
  authDomain: "signal-clone-71f4a.firebaseapp.com",
  projectId: "signal-clone-71f4a",
  storageBucket: "signal-clone-71f4a.appspot.com",
  messagingSenderId: "391992565437",
  appId: "1:391992565437:web:04eba36388eb7266f521d4",
};

let app;

if (firebase?.apps?.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

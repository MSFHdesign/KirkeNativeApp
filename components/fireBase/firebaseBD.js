// database/firebaseDb.js
import { initializeApp } from "firebase/app";
import firestore from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA4QCIsiuXmPnFn31l3WbUGQTA6tjToLng",
  authDomain: "kirkeappdev.firebaseapp.com",
  projectId: "kirkeappdev",
  storageBucket: "kirkeappdev.appspot.com",
  messagingSenderId: "485169215226",
  appId: "1:485169215226:web:43abc2ed1e94fd8afdbb43",
};
initializeApp(firebaseConfig);
firestore();
export default firebase;

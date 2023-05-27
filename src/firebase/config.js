import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0KidoQJ3Hm5nIJrY5ZjqphLoGRKwNea4",
    authDomain: "fir-2b65c.firebaseapp.com",
    projectId: "fir-2b65c",
    storageBucket: "fir-2b65c.appspot.com",
    messagingSenderId: "776022437684",
    appId: "1:776022437684:web:97a68b8c6c235701bebf61",
    measurementId: "G-T8ZMYPVK2T"
  };

firebase.initializeApp(firebaseConfig); 
export const firestore = firebase.firestore();
 
import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCumPp-MUvheo1S7ixUDqVoz-13ypCnjE4",
    authDomain: "makeharvard123.firebaseapp.com",
    projectId: "makeharvard123",
    storageBucket: "makeharvard123.appspot.com",
    messagingSenderId: "905069228192",
    appId: "1:905069228192:web:5f01922406b1499f8399c5",
    measurementId: "G-RK0E6ECBBT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase
export const firestore = firebase.firestore();
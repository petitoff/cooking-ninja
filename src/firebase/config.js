import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };

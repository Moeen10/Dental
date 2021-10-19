import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.conflig";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
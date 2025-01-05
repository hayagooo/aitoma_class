import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get, update, remove } from "firebase/database";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAC90GsQOWtayVv20NK-awMtmPAGLni9to",
    authDomain: "cctv-17aa0.firebaseapp.com",
    projectId: "cctv-17aa0",
    storageBucket: "cctv-17aa0.firebasestorage.app",
    messagingSenderId: "1021420131659",
    appId: "1:1021420131659:web:48a364d664648fc99a44ce",
    measurementId: "G-YWR3FSS67R",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, ref, get, update, auth, remove};
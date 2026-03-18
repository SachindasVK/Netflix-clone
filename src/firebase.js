import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyBjWvgjqcJRdlqUFJW8dDcsB2XXXAOHAKQ",
    authDomain: "netflixclone-4c756.firebaseapp.com",
    projectId: "netflixclone-4c756",
    storageBucket: "netflixclone-4c756.firebasestorage.app",
    messagingSenderId: "696046864816",
    appId: "1:696046864816:web:7e8cdab56096ac7c5cee75",
    measurementId: "G-NVC3242ZWB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;

        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
};

const logout = () => {
    signOut(auth);
};

export { auth, db, login, signup, logout };
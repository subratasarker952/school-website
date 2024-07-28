import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCvOURxNHi1Dcqa48YvqgXWrVhKDsO4wvg",
    authDomain: "only-for-firebase-practice.firebaseapp.com",
    projectId: "only-for-firebase-practice",
    storageBucket: "only-for-firebase-practice.appspot.com",
    messagingSenderId: "791826844664",
    appId: "1:791826844664:web:6a86e076a07486ad61a40d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
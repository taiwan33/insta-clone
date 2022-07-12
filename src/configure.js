import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCidzw8noUuaWXFxv5-cfE7MtaSEgS7tZs",
    authDomain: "instagram-clone-117b5.firebaseapp.com",
    projectId: "instagram-clone-117b5",
    storageBucket: "instagram-clone-117b5.appspot.com",
    messagingSenderId: "1011427776435",
    appId: "1:1011427776435:web:1c9a170e6b6f277b589dc6",
    measurementId: "G-GE2NV2ZWP0"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

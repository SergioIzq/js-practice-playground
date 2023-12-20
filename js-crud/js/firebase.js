// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, doc, updateDoc, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLVQIddZgokPgC7n5CX6xXPZfMY2P_wTk",
    authDomain: "js-crud-98278.firebaseapp.com",
    projectId: "js-crud-98278",
    storageBucket: "js-crud-98278.appspot.com",
    messagingSenderId: "31254836610",
    appId: "1:31254836610:web:e0a4da36b6403add370b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveTask = (title, description) => addDoc(collection(db, "tareas"), { title, description });

export const getTasks = () => getDocs(collection(db, "tareas"));

export const onGetTasks = (callback) => onSnapshot(collection(db, "tareas"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tareas", id));

export const updateTask = (id, newFields) => updateDoc(doc(db, "tareas", id), newFields);

export const getTask = (id) => getDoc(doc(db, "tareas", id));



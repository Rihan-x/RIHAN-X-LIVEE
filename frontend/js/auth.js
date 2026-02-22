import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function register(email,password){
  const user = await createUserWithEmailAndPassword(auth,email,password);
  await setDoc(doc(db,"users",user.user.uid),{
    email:email,
    role:"USER"
  });
}

export async function login(email,password){
  await signInWithEmailAndPassword(auth,email,password);
}

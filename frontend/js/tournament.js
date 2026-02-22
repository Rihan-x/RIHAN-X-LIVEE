import { db } from "./firebase.js";
import { addDoc, collection }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function registerTournament(name,uid){
  await addDoc(collection(db,"tournaments"),{
    playerName:name,
    playerUID:uid,
    createdAt:new Date()
  });
}

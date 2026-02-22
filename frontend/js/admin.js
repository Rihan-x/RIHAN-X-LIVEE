import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, getDocs, deleteDoc, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* =========================
   AUTH & ROLE CHECK
========================= */
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }
  const userDoc = await getDoc(doc(db, "users", user.uid));
  if (!userDoc.exists() || userDoc.data().role === "USER") {
    alert("Access Denied");
    window.location.href = "index.html";
  } else {
    loadPlayers();
  }
});

/* =========================
   LOAD TOURNAMENT PLAYERS
========================= */
export async function loadPlayers() {
  const snapshot = await getDocs(collection(db, "tournaments"));
  const list = document.getElementById("playersList");
  if (!list) return;
  list.innerHTML = "";

  snapshot.forEach(player => {
    const data = player.data();
    list.innerHTML += `
      <div class="player">
        <p>Name: ${data.playerName}</p>
        <p>UID: ${data.playerUID}</p>
        <button onclick="deletePlayer('${player.id}')">Delete</button>
      </div>
    `;
  });
}

/* =========================
   DELETE PLAYER
========================= */
window.deletePlayer = async function (id) {
  await deleteDoc(doc(db, "tournaments", id));
  loadPlayers();
};

/* =========================
   CHANGE USER ROLE
========================= */
window.changeRole = async function () {
  const uid = document.getElementById("userUID").value;
  const role = document.getElementById("newRole").value;
  if (!uid || !role) {
    alert("Fill all fields!");
    return;
  }
  await updateDoc(doc(db, "users", uid), { role: role });
  alert("Role Updated!");
};

/* =========================
   LOGOUT
========================= */
window.logout = async function () {
  await signOut(auth);
  window.location.href = "index.html";
};

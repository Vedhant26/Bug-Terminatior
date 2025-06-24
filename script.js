// ✅ Firebase module imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDeF0CNfCwXq7Q6ohkcgFlH_44dSqV93u4",
  authDomain: "bug-hunter-cf495.firebaseapp.com",
  databaseURL: "https://bug-hunter-cf495-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bug-hunter-cf495",
  storageBucket: "bug-hunter-cf495.appspot.com",
  messagingSenderId: "517122626707",
  appId: "1:517122626707:web:ad2bbc0ea4d06918f86966",
  measurementId: "G-MXEN75MSZS"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Start Exploration Logic
function startExploration() {
  console.log("▶️ Enter button clicked");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "login.html";
    }
  });
}

// ✅ Attach click listener once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("enter-btn");
  if (btn) {
    btn.addEventListener("click", startExploration);
  }
});

// ✅ Global loader fade out
window.addEventListener("load", () => {
  const loader = document.querySelector(".global-loader");
  if (loader) loader.style.display = "none";
});

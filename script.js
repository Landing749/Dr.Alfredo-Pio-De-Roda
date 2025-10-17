// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDD6mWPt6b5bwJ76VKfIr-idVilI2h6jB8",
  authDomain: "dr-alfredo-2726d.firebaseapp.com",
  projectId: "dr-alfredo-2726d",
  storageBucket: "dr-alfredo-2726d.firebasestorage.app",
  messagingSenderId: "381651627181",
  appId: "1:381651627181:web:ff555f10e281bac81d6a24",
  measurementId: "G-EKTFW59J93"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Enrollment submission
const form = document.getElementById("enrollForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const parentName = document.getElementById("parentName").value.trim();
  const studentName = document.getElementById("studentName").value.trim();
  const contact = document.getElementById("contactNumber").value.trim();
  const email = document.getElementById("email").value.trim();
  const lrn = document.getElementById("lrn").value.trim();
  const grade = document.getElementById("gradeLevel").value;

  if (!grade) return alert("Please select a grade.");

  const path = `enrollments/${grade}/${lrn || studentName}`;
  set(ref(db, path), {
    parentName,
    studentName,
    contact,
    email,
    lrn,
    grade,
    enrolledAt: new Date().toISOString()
  })
  .then(() => {
    document.getElementById("enrollMessage").textContent = `✅ Enrollment successful for ${studentName} (${grade})`;
    form.reset();
  })
  .catch(err => {
    document.getElementById("enrollMessage").textContent = `❌ Error: ${err.message}`;
  });
});

// Simple slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(s => s.classList.remove("active"));
  slides[slideIndex].classList.add("active");
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 4000);
}
showSlides();


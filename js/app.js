// ==========================================
// app.js
// Main Application Entry Point
// ==========================================

// ----------------------------
// DOM Elements
// ----------------------------

const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const noteColor = document.getElementById("noteColor");

const addNoteBtn = document.getElementById("addNoteBtn");

const notesContainer = document.getElementById("notesContainer");
const archiveContainer = document.getElementById("archiveContainer");

const searchInput = document.getElementById("searchInput");

const darkModeBtn = document.getElementById("darkModeBtn");

const deleteModal = document.getElementById("deleteModal");
const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete = document.getElementById("cancelDelete");

const noteTemplate = document.getElementById("noteTemplate");

// ----------------------------
// Global Variables
// ----------------------------

let notes = [];
let noteToDelete = null;

// ----------------------------
// Event Listeners
// ----------------------------

// Add Note
addNoteBtn.addEventListener("click", createNote);

// Search
searchInput.addEventListener("input", searchNotes);

// Dark Mode
darkModeBtn.addEventListener("click", toggleDarkMode);

// Delete Modal
confirmDelete.addEventListener("click", deleteNote);

cancelDelete.addEventListener("click", closeDeleteModal);

// Close modal when clicking outside it
deleteModal.addEventListener("click", function (event) {

    if (event.target === deleteModal) {

        closeDeleteModal();

    }

});

// Ctrl + Enter creates a note
noteText.addEventListener("keydown", function (event) {

    if (event.ctrlKey && event.key === "Enter") {

        createNote();

    }

});

// Trim whitespace
noteTitle.addEventListener("blur", function () {

    this.value = this.value.trim();

});

noteText.addEventListener("blur", function () {

    this.value = this.value.trim();

});

// Escape closes modal
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeDeleteModal();

    }

});

// ----------------------------
// Initialize Application
// ----------------------------

function initializeApp() {

    loadNotes();

    loadTheme();

    renderNotes();

}

initializeApp();
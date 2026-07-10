// ==========================================
// storage.js
// Handles Local Storage
// ==========================================

// Load notes from localStorage
function loadNotes() {

    const storedNotes = localStorage.getItem("googleKeepNotes");

    if (storedNotes) {
        notes = JSON.parse(storedNotes);
    } else {
        notes = [];
    }

}

// Save notes to localStorage
function saveNotes() {

    localStorage.setItem(
        "googleKeepNotes",
        JSON.stringify(notes)
    );

}

// ================================
// Theme Storage
// ================================

// Save current theme
function saveTheme(theme) {

    localStorage.setItem("keepTheme", theme);

}

// Load saved theme
function loadTheme() {

    const theme = localStorage.getItem("keepTheme");

    if (theme === "dark") {

        document.body.classList.add("dark");

        if (typeof darkModeBtn !== "undefined") {
            darkModeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';
        }

    } else {

        document.body.classList.remove("dark");

        if (typeof darkModeBtn !== "undefined") {
            darkModeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';
        }

    }

}

// Clear all notes (optional helper)
function clearAllNotes() {

    localStorage.removeItem("googleKeepNotes");

    notes = [];

    if (typeof renderNotes === "function") {
        renderNotes();
    }

}
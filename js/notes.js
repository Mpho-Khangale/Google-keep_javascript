// ==========================================
// notes.js
// Handles Note Operations
// ==========================================

// Format the current date
function formatDate() {

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };

    return new Date().toLocaleString("en-ZA", options);

}

// ================================
// Create Note
// ================================

function createNote() {

    const title = noteTitle.value.trim();
    const text = noteText.value.trim();
    const color = noteColor.value;

    if (title === "" && text === "") {

        alert("Please enter a title or note.");

        return;

    }

    const note = {

        id: Date.now(),
        title: title,
        text: text,
        color: color,
        archived: false,
        date: formatDate()

    };

    notes.unshift(note);

    saveNotes();

    renderNotes(searchInput.value);

    noteTitle.value = "";
    noteText.value = "";
    noteColor.value = "#ffffff";

}

// ================================
// Archive Note
// ================================

function archiveNote(id) {

    const note = notes.find(n => n.id === id);

    if (!note) return;

    note.archived = true;

    saveNotes();

    renderNotes(searchInput.value);

}

// ================================
// Restore Note
// ================================

function restoreNote(id) {

    const note = notes.find(n => n.id === id);

    if (!note) return;

    note.archived = false;

    saveNotes();

    renderNotes(searchInput.value);

}

// ================================
// Delete Note
// ================================

function deleteNote() {

    if (noteToDelete === null) return;

    notes = notes.filter(note => note.id !== noteToDelete);

    saveNotes();

    renderNotes(searchInput.value);

    closeDeleteModal();

}

// ================================
// Find Note By ID
// ================================

function getNoteById(id) {

    return notes.find(note => note.id === id);

}

// ================================
// Update Note
// (For future editing support)
// ================================

function updateNote(id, title, text, color) {

    const note = getNoteById(id);

    if (!note) return;

    note.title = title;
    note.text = text;
    note.color = color;

    saveNotes();

    renderNotes(searchInput.value);

}

// ================================
// Delete All Archived Notes
// (Optional feature)
// ================================

function deleteArchivedNotes() {

    notes = notes.filter(note => !note.archived);

    saveNotes();

    renderNotes(searchInput.value);

}
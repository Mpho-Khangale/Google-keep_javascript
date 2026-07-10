// ==========================================
// ui.js
// Handles User Interface
// ==========================================

// ================================
// Render Notes
// ================================

function renderNotes(searchTerm = "") {

    notesContainer.innerHTML = "";
    archiveContainer.innerHTML = "";

    const filteredNotes = notes.filter(note => {

        const search = searchTerm.toLowerCase();

        return (
            note.title.toLowerCase().includes(search) ||
            note.text.toLowerCase().includes(search)
        );

    });

    filteredNotes.forEach(note => {

        const clone = noteTemplate.content.cloneNode(true);

        const card = clone.querySelector(".note-card");

        card.style.background = note.color;

        clone.querySelector(".note-title").textContent = note.title;

        clone.querySelector(".note-body").textContent = note.text;

        clone.querySelector(".note-date").textContent = note.date;

        const archiveBtn = clone.querySelector(".archive-btn");
        const restoreBtn = clone.querySelector(".restore-btn");
        const deleteBtn = clone.querySelector(".delete-btn");

        if (note.archived) {

            archiveBtn.style.display = "none";

        } else {

            restoreBtn.style.display = "none";

        }

        archiveBtn.addEventListener("click", function () {

            archiveNote(note.id);

        });

        restoreBtn.addEventListener("click", function () {

            restoreNote(note.id);

        });

        deleteBtn.addEventListener("click", function () {

            openDeleteModal(note.id);

        });

        if (note.archived) {

            archiveContainer.appendChild(clone);

        } else {

            notesContainer.appendChild(clone);

        }

    });

}

// ================================
// Search Notes
// ================================

function searchNotes() {

    renderNotes(searchInput.value);

}

// ================================
// Delete Modal
// ================================

function openDeleteModal(id) {

    noteToDelete = id;

    deleteModal.classList.remove("hidden");

}

function closeDeleteModal() {

    noteToDelete = null;

    deleteModal.classList.add("hidden");

}

// ================================
// Dark Mode
// ================================

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        saveTheme("dark");

    } else {

        darkModeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        saveTheme("light");

    }

}

// ================================
// Empty State
// ================================

function showEmptyState() {

    if (notes.length === 0) {

        notesContainer.innerHTML = `
            <div class="empty-state">
                <h2>No Notes Yet</h2>
                <p>Create your first note above.</p>
            </div>
        `;

    }

}

// ================================
// Toast Notification
// ================================

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.className = "toast show";

    setTimeout(function () {

        toast.className = "toast";

    }, 3000);

}
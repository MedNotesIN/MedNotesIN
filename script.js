let notes = loadFromLocal();

// Render notes on page load
renderNotes();

// Add note
function addNote() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    let note = {
        id: Date.now(),
        title: title,
        content: content
    };

    notes.push(note);

    saveToLocal(notes);   // AUTO SAVE
    renderNotes();

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

// Delete note
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);

    saveToLocal(notes);   // AUTO SAVE
    renderNotes();
}

// Show notes
function renderNotes() {
    let container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach(note => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="deleteNote(${note.id})">Delete</button>
        `;
        container.appendChild(div);
    });
}
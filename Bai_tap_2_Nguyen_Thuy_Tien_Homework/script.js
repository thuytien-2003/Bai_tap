const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const filterBtns = document.querySelectorAll(".filters button");

const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note");
const notesContainer = document.getElementById("notes-container");

const themeToggle = document.getElementById("theme-toggle");
const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting");

// Màu ghi chú
const noteColors = ["#FFD700", "#90EE90", "#ADD8E6", "#FFA07A", "#FFB6C1"];

// Hiện thời gian và lời chào
function updateClockAndGreeting() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();

    const hour = now.getHours();
    if (hour < 12) greeting.textContent = "Good morning";
    else if (hour < 18) greeting.textContent = "Good afternoon";
    else greeting.textContent = "Good evening";
}
setInterval(updateClockAndGreeting, 1000);
updateClockAndGreeting();

// Lưu vào localStorage
function saveTasksToLocalStorage() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach((li) => {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveNotesToLocalStorage() {
    const notes = [];
    notesContainer.querySelectorAll(".note").forEach((note) => {
        notes.push({
            text: note.querySelector("span").textContent,
            color: note.style.background
        });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.setAttribute("draggable", "true");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = () => {
            li.classList.toggle("completed");
            saveTasksToLocalStorage();
        };

        const span = document.createElement("span");
        span.textContent = task.text;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => {
            const newText = prompt("Chỉnh sửa task:", span.textContent);
            if (newText) {
                span.textContent = newText.trim();
                saveTasksToLocalStorage();
            }
        };

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => {
            li.remove();
            saveTasksToLocalStorage();
        };

        li.append(checkbox, span, editBtn, delBtn);
        if (task.completed) li.classList.add("completed");
        taskList.appendChild(li);
    });
    enableTaskDragDrop();
}

function loadNotesFromLocalStorage() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(note => {
        const div = document.createElement("div");
        div.className = "note";
        div.setAttribute("draggable", "true");
        div.style.background = note.color;

        const content = document.createElement("span");
        content.className = "note-content";
        content.textContent = note.text;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => {
            const newText = prompt("Chỉnh sửa ghi chú:", content.textContent);
            if (newText) {
                content.textContent = newText.trim();
                saveNotesToLocalStorage();
            }
        };

        const del = document.createElement("button");
        del.textContent = "×";
        del.className = "delete-note";
        del.onclick = () => {
            div.remove();
            saveNotesToLocalStorage();
        };

        div.append(content, editBtn, del);
        notesContainer.appendChild(div);
    });
    enableNoteDragDrop();
}

// Gọi khi vào trang
loadTasksFromLocalStorage();
loadNotesFromLocalStorage();

// Thêm task
addTaskBtn.onclick = () => {
    const text = taskInput.value.trim();
    if (!text) return alert("Không được để trống!");

    const li = document.createElement("li");
    li.setAttribute("draggable", "true");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => {
        li.classList.toggle("completed");
        saveTasksToLocalStorage();
    };

    const span = document.createElement("span");
    span.textContent = text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        const newText = prompt("Chỉnh sửa task:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText.trim();
            saveTasksToLocalStorage();
        }
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
        li.remove();
        saveTasksToLocalStorage();
    };

    li.append(checkbox, span, editBtn, delBtn);
    taskList.appendChild(li);
    taskInput.value = "";

    enableTaskDragDrop();
    saveTasksToLocalStorage();
};

// Lọc task
filterBtns.forEach(btn => {
    btn.onclick = () => {
        const filter = btn.dataset.filter;
        const tasks = taskList.querySelectorAll("li");

        tasks.forEach(task => {
            const completed = task.classList.contains("completed");
            task.style.display =
                filter === "all" ||
                (filter === "completed" && completed) ||
                (filter === "incomplete" && !completed) ?
                "flex" :
                "none";
        });
    };
});

// Thêm ghi chú
addNoteBtn.onclick = () => {
    const text = noteInput.value.trim();
    if (!text) return alert("Không được để trống!");

    const div = document.createElement("div");
    div.className = "note";
    div.setAttribute("draggable", "true");
    div.style.background = noteColors[Math.floor(Math.random() * noteColors.length)];

    const content = document.createElement("span");
    content.textContent = text;
    content.className = "note-content";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        const newText = prompt("Chỉnh sửa ghi chú:", content.textContent);
        if (newText !== null && newText.trim() !== "") {
            content.textContent = newText.trim();
            saveNotesToLocalStorage();
        }
    };

    const del = document.createElement("button");
    del.textContent = "×";
    del.className = "delete-note";
    del.onclick = () => {
        div.remove();
        saveNotesToLocalStorage();
    };

    div.append(content, editBtn, del);
    notesContainer.appendChild(div);
    noteInput.value = "";

    enableNoteDragDrop();
    saveNotesToLocalStorage();
};

// Chuyển đổi giao diện
themeToggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
};

// Kéo và thả Task
function enableTaskDragDrop() {
    let dragging = null;

    taskList.querySelectorAll("li").forEach((li) => {
        li.ondragstart = () => dragging = li;

        li.ondragover = (e) => {
            e.preventDefault();
            li.style.borderTop = "2px solid #000";
        };

        li.ondragleave = () => li.style.borderTop = "none";

        li.ondrop = () => {
            li.style.borderTop = "none";
            if (dragging && dragging !== li) {
                taskList.insertBefore(dragging, li);
                saveTasksToLocalStorage();
            }
        };
    });
}

// Kéo và thả Note
function enableNoteDragDrop() {
    let dragging = null;

    notesContainer.querySelectorAll(".note").forEach((note) => {
        note.ondragstart = () => dragging = note;

        note.ondragover = (e) => {
            e.preventDefault();
            note.style.border = "2px dashed #000";
        };

        note.ondragleave = () => note.style.border = "none";

        note.ondrop = () => {
            note.style.border = "none";
            if (dragging && dragging !== note) {
                notesContainer.insertBefore(dragging, note);
                saveNotesToLocalStorage();
            }
        };
    });
}
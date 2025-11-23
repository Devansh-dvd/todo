let listnames = JSON.parse(localStorage.getItem("listnames")) || [];
let box = document.getElementById('task-box');
let selectedList = null;

// Display all list rows
for (let i = 0; i < listnames.length; i++) {
    const listName = listnames[i];

    const row = document.createElement('div');
    row.className = 'input-row';
    row.id = listName;

    const serial = document.createElement('div');
    serial.className = 'serial-number';
    serial.innerText = `${i + 1} - `;

    const name = document.createElement('div');
    name.className = 'lists';
    name.innerText = listName;

    const space = document.createElement('div');
    space.className = 'space';
    space.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;';

    const days = document.createElement('div');
    days.className = 'days';
    days.innerText = `Total Days = ${localStorage.getItem(`${listName}_list-days`) || 0}`;

    const tasks = document.createElement('div');
    tasks.className = 'tasks';
    tasks.innerText = `Total Tasks = ${localStorage.getItem(`${listName}_list-tasks`) || 0}`;

    row.appendChild(serial);
    row.appendChild(name);
    row.appendChild(space);
    row.appendChild(days);
    row.appendChild(space.cloneNode(true));
    row.appendChild(tasks);

    box.appendChild(row);
    box.appendChild(document.createElement('br'));

    // Row click selects the list
    row.addEventListener('click', () => {
        selectedList = listName;
        document.querySelectorAll('.input-row').forEach(r => r.style.backgroundColor = 'transparent');
        row.style.backgroundColor = 'rgba(59, 73, 161, 1)';
    });
}

// Open List Button
const openlist = document.createElement('button');
openlist.type = 'button';
openlist.id = 'open';
openlist.innerHTML = `Open List`;
box.appendChild(openlist);

// Delete List Button
const deletelist = document.createElement('button');
deletelist.type = 'button';
deletelist.id = 'clear';
deletelist.innerHTML = `Delete List`;
box.appendChild(deletelist);

// Open another page (optional)
let b = document.getElementById("My list");
if (b) {
    b.addEventListener('click', () => {
        window.open("http://127.0.0.1:5500/list.html");
    });
}

// Delete logic
const del = document.getElementById("clear");
const opens = document.getElementById("open");

const listdelete = () => {
    if (!selectedList) {
        alert("Please select a list first.");
        return;
    }

    const taskCount = parseInt(localStorage.getItem(`${selectedList}_list-tasks`)) || 0;

    for (let j = 1; j <= taskCount; j++) {
        localStorage.removeItem(`${selectedList}_task_${j}`);
        localStorage.removeItem(`${selectedList}_day_${j}`);
        localStorage.removeItem(`${selectedList}_status_${j}`);
    }

    localStorage.removeItem(`${selectedList}_list-tasks`);
    localStorage.removeItem(`${selectedList}_list-days`);
    localStorage.removeItem(selectedList); // Just in case

    listnames = listnames.filter(name => name !== selectedList);
    localStorage.setItem("listnames", JSON.stringify(listnames));

    alert(`List "${selectedList}" deleted successfully.`);
    location.reload();
};

const listopen = () => {

    if(!selectedList)
    {
        alert("Please select a list first");
        return;
    }

    // send this name of a selected list to other page which opens information about list 

    localStorage.setItem('2bopened' , selectedList );
    window.open("/listinfo.html")

}

del.addEventListener('click', listdelete);
opens.addEventListener('click' , listopen);



let listnames = JSON.parse(localStorage.getItem("listnames")) || [];
let listname = listnames[listnames.length - 1];

let days = parseInt(localStorage.getItem(`${listname}_list-days`), 10);
let tasks = parseInt(localStorage.getItem(`${listname}_list-tasks`), 10);
let inputs = document.getElementById('task-box');

let taskElements = {};

for (let i = 1; i <= tasks; i++) {
    const box1 = document.createElement('input');
    const box2 = document.createElement('input');
    const checkbox = document.createElement('input');
    const line1 = document.createElement('br');
    const line2 = document.createElement('br');
    const line3 = document.createElement('br');

    box1.className = 'task-info';
    box1.placeholder = `Task number ${i}...`;

    box2.className = 'day-info';
    box2.placeholder = `Days`;

    checkbox.type = 'checkbox';
    checkbox.className = 'status';

    const row = document.createElement('div');
    row.className = 'input-row';

    row.appendChild(box1);
    row.appendChild(box2);
    row.appendChild(checkbox);

    inputs.appendChild(row);
    inputs.appendChild(line1);
    inputs.appendChild(line2);
    inputs.appendChild(line3);

    taskElements[`box1_${i}`] = box1;
    taskElements[`box2_${i}`] = box2;
    taskElements[`checkbox_${i}`] = checkbox;

    const savedTask = localStorage.getItem(`${listname}_task_${i}`);
    const savedDay = localStorage.getItem(`${listname}_day_${i}`);
    const savedStatus = localStorage.getItem(`${listname}_status_${i}`);

    if (savedTask) box1.value = savedTask;
    if (savedDay) box2.value = savedDay;
    if (savedStatus === "true") checkbox.checked = true;
}

const save = document.createElement('button');
save.type = 'button';
save.id = 'save';
save.innerHTML = `Save List`;
inputs.appendChild(save);

const clear = document.createElement('button');
clear.type = 'button';
clear.id = 'clear';
clear.innerHTML = `Clear List`;
inputs.appendChild(clear);

const check = () => {
    let indicate = true;
    let total_days = 0;

    for (let i = 1; i <= tasks; i++) {
        const taskVal = taskElements[`box1_${i}`].value.trim();
        const dayVal = taskElements[`box2_${i}`].value.trim();

        if (taskVal === '' || dayVal === '') {
            indicate = false;
            continue;
        }

        total_days += parseInt(dayVal, 10);
    }

    if (!indicate) {
        alert("Fill all details to save the list");
        return;
    }

    if (total_days > days) {
        alert("Total days must be less than or equal to set deadline");
        return;
    }

    for (let i = 1; i <= tasks; i++) {
        const taskVal = taskElements[`box1_${i}`].value;
        const dayVal = taskElements[`box2_${i}`].value;
        const status = taskElements[`checkbox_${i}`].checked;

        localStorage.setItem(`${listname}_task_${i}`, taskVal);
        localStorage.setItem(`${listname}_day_${i}`, dayVal);
        localStorage.setItem(`${listname}_status_${i}`, status);
    }

    setTimeout(() => {
        alert("File saved Successfully");
    }, 500);
};

const blank = () => {
    for (let i = 1; i <= tasks; i++) {
        taskElements[`box1_${i}`].value = '';
        taskElements[`box2_${i}`].value = '';
        taskElements[`checkbox_${i}`].checked = false;
    }
};

clear.addEventListener('click', blank);
save.addEventListener('click', check);

let b = document.getElementById("My list")
const fun1 = () => {
    window.open("http://127.0.0.1:5500/list.html")
}
b.addEventListener('click' , fun1);

let search = document.getElementById("search")
const open = () => {
    window.open("/list.html");
}

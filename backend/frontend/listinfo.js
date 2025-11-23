document.getElementsByClassName('list-header')[0].innerHTML = `${localStorage.getItem('2bopened')}`;
let list = localStorage.getItem('2bopened');
let tasks = Number(localStorage.getItem(`${list}_list-tasks`)); 
let days = localStorage.getItem(`${list}_list-days`);
let inputs = document.getElementById('info-box');

inputs.appendChild(document.createElement('br'))
inputs.appendChild(document.createElement('br'))

let taskElements = {};

for (let i = 1; i <= tasks; i++) {
    const box1 = document.createElement('div');
    const box2 = document.createElement('div');
    const checkbox = document.createElement('input');
    const line1 = document.createElement('br');
    const line2 = document.createElement('br');
    const line3 = document.createElement('br');

    box1.className = 'task-info';
    box1.innerHTML = `${localStorage.getItem(`${list}_task_${i}`)}`

    box2.className = 'day-info';
    box2.innerHTML = `${localStorage.getItem(`${list}_day_${i}`)}`

    checkbox.type = 'checkbox';
    checkbox.className = 'status';
    checkbox.checked = localStorage.getItem(`${list}_status_${i}`) === "true";

    const row = document.createElement('div');
    row.className = 'input-row';

    row.appendChild(box1);
    row.appendChild(box2);
    row.appendChild(checkbox);

    inputs.appendChild(row);

    taskElements[`box1_${i}`] = box1;
    taskElements[`box2_${i}`] = box2;
    taskElements[`checkbox_${i}`] = checkbox;

    if( i == tasks )
        break;

    inputs.appendChild(line1);
    inputs.appendChild(line2);
    inputs.appendChild(line3);

}
inputs.appendChild(document.createElement('br'))
inputs.appendChild(document.createElement('br'))

const save = document.createElement('button');
save.type = 'button';
save.id = 'save';
save.innerHTML = `Save List`;
inputs.appendChild(save);

const check = () => {

    for( let i = 1 ; i <= tasks ; i++ )
    {
        localStorage.setItem(`${list}_status_${i}` ,taskElements[`checkbox_${i}`].checked)
    }
    alert("List updated Successfully");
}

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

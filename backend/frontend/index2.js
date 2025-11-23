let a = document.getElementById("submit")

const fun = () => {

let names = document.getElementById('name').value;
let days = document.getElementById('days').value;
let tasks = document.getElementById('tasks').value;

let listnames = JSON.parse(localStorage.getItem('listnames'))||[]
if(!listnames.includes(names))
{
    listnames.push(names);
    localStorage.setItem('listnames',JSON.stringify(listnames));
}

localStorage.setItem('listname',names);
localStorage.setItem(`${names}_list-days`,days);
localStorage.setItem(`${names}_list-tasks`,tasks);

    window.open("http://127.0.0.1:5500/listcreate.html")
}
a.addEventListener('click' , fun)

let b = document.getElementById("My list")
const fun1 = () => {
    window.open("http://127.0.0.1:5500/list.html")
}
b.addEventListener('click' , fun1);

let search = document.getElementById("search")
const open = () => {
    window.open("/list.html");
}


  
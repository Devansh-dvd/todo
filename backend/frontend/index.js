let a = document.getElementById("lessgoo")
const fun = () => {
    window.open("http://127.0.0.1:5500/getsart.html")
}
a.addEventListener('click' , fun)

let b = document.getElementById("My list")
let edit = document.getElementById("letgoo")
const fun1 = () => {
    window.open("http://127.0.0.1:5500/list.html")
}
b.addEventListener('click' , fun1);
edit.addEventListener('click' , fun1);

let search = document.getElementById("search")
const open = () => {
    window.open("/list.html");
}
let homie = document.getElementById("home")
const fun2 = () => {
    window.open("http://127.0.0.1:5500/index.html")
}
b.addEventListener('click' , fun2);
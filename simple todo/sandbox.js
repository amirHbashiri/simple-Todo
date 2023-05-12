const btn = document.getElementById("add");
const list = document.getElementById("todolist");
let input = document.getElementById("input");

btn.addEventListener("click", function () {
  let todoitem = document.createElement("li");
  if (input.value == "") {
    alert("Please Enter Something...");
  } else {
    todoitem.innerText = input.value;
    input.value = "";
    list.prepend(todoitem);
  }
});

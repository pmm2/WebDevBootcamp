window.setTimeout(function () {
  // put all the rest of your JS code from the lecture here
  let command = prompt("O que queres fazer?");
  const todolist = [];
  while (command !== "quit") {
    if (command === "new") {
      addTodo();
    } else if (command === "list") {
      listTodos();
    } else if (command === "delete") {
      deleteTodo();
    }
    command = prompt("O que queres fazer?");
  }
}, 500);

function listTodos() {
  todolist.forEach((element, number) => {
    console.log(number + " : " + element);
  });
}
function deleteTodo() {
  let index = prompt("Digite o numero do Todo que deseja deletar");
  console.log(todolist[index] + " Deleted");
  todolist.splice(index, 1);
}
function addTodo() {
  const chore = prompt("Insira uma nova tarefa");
  todolist.push(chore);
  console.log(chore + " Added");
}

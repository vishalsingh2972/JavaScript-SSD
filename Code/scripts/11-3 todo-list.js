//Todo List version 3

const todoList = []; //initially put display items on webpage as empty

renderTodoList(); 

function renderTodoList(){ //used to display items on webpage
  let todoListHTML = ''; 

  for(let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
  
    const html = `
      <p>
        ${todo}
        <button onclick="
          todoList.splice(${i}, 1);
          //console.log(${i});
          console.log(todoList);
          renderTodoList(); 
         ">Delete</button>     
      </p>
    `; 
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

}

function addTodo(){ //used to display items on the console
  const inputElement = document.querySelector('.js-name-input'); 

  const name = inputElement.value; 
  
  todoList.push(name);
  console.log(todoList);
  renderTodoList();

  inputElement.value = '';
}

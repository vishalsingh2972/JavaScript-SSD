//Todo List version 2

const todoList = []; //initially put display items on webpage as empty

renderTodoList(); 

function renderTodoList(){ //used to display items on webpage
  let todoListHTML = ''; //variable to store the result

  for(let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    //console.log(todo);
    const html = `<p>${todo}</p>`; //Create some HTML code for each todo / each index of todo //here we inserted each todo index element inside the HTML paragraph element
    //console.log(html);
  //Now we'll combine all the HTML code together using the Accumulator Pattern and put it on the webpage
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

//Todo List version 3

const todoList = [{
  name:'make dinner',
  dueDate: '2023-12-22'
},{ 
  name:'wash dishes',
  dueDate:'2022-12-22'
}]; //objects as array elements, here we have 1 object with 2 properties(name and dueDate) at each index of the array

renderTodoList(); 

function renderTodoList(){ //used to display items on webpage
  let todoListHTML = ''; 

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i]; //now each element todoList[i] is itself an object which has properties(name and dueDate)

//Getting/Storing properties(name and dueDate) of "object present at each index position"
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const{name, dueDate} = todoObject; //Destructuring shortcut
    
    const html = `
      <p>
        ${name} 
        ${dueDate}
        ${i}
        <button onclick="
          todoList.splice(${i}, 1);
          //console.log(${i});

          //console.log('manu')
          console.log(todoList);
          //console.log('chomu')

          renderTodoList(); 
         ">Delete</button>     
      </p>
    `; 
    todoListHTML += html;
  }
  //console.log(todoListHTML);

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

}

function addTodo(){ //used to display items on the console
  const inputElement = document.querySelector('.js-name-input');   
  const name = inputElement.value; 

  const dateInputElement = document.querySelector('.js-due-date-input');
  //console.log(dateInputElement); //object
  const dueDate = dateInputElement.value;
  //console.log(dueDate); //string

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate //Shorthand Property shortcut
  });
  //console.log(todoList);

  renderTodoList();

  inputElement.value = '';
}
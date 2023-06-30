//using Arrow Functions

const todoList = [{
  name:'make dinner',
  dueDate: '2023-12-22'
},{ 
  name:'wash dishes',
  dueDate:'2022-12-22'
}]; 

renderTodoList(); 

function renderTodoList(){ //used to display items on webpage //leaving this as regular function as it is easier to read and enables hoisting
  let todoListHTML = ''; 
  
  todoList.forEach((todoObject, index) => { //arrow function
    //Getting/Storing properties(name and dueDate) of "object present at each index position"
        const{name, dueDate} = todoObject; //Destructuring shortcut
        
        const html = `
          <div>${name}</div> 
    
          <div>${dueDate}</div> 
          
          <button onclick="
            todoList.splice(${index}, 1);
            console.log(${index});
    
            //console.log('manu')
            console.log(todoList);
            //console.log('chomu')
    
            renderTodoList(); 
          " class="delete-todo-button">Delete</button>    
        `; 
        todoListHTML += html;
  });
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
    name,
    dueDate //Shorthand Property shortcut
  });
  //console.log(todoList);

  renderTodoList();

  inputElement.value = '';
}

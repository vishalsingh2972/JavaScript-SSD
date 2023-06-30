//Todo List version 3 using .forEach method instead of for loop

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

  //console.log(todoList);
  //console.log(typeof todoList);

  todoList.forEach(function(todoObject, index){ 
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
    //name: name,
    //dueDate: dueDate
    name,
    dueDate //Shorthand Property shortcut
  });
  //console.log(todoList);

  renderTodoList();

  inputElement.value = '';
}
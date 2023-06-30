//using .addEventListener()

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
          
          <button class="delete-todo-button js-delete-todo-button">Delete</button>    
        `; 
        todoListHTML += html;
  });
  //console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  //console.log(document.querySelectorAll('.js-delete-todo-button')); //document.querySelectorAll gives us a list of all the delete buttons stored in an array
  //console.log(typeof document.querySelectorAll('.js-delete-todo-button')); //object //in JS array is also a special kind of object
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        console.log(index); //Closures Property
    
        //console.log('manu')
        console.log(todoList);
        //console.log('chomu')

        renderTodoList(); 
      })
    }) //querySelectorAll so that addEventListener gets applied to all delte buttons //so querySelectorAll will give us all the elements on the page that have the class js-delete-todo-button //forEach for looping through the list of all the delete buttons stored in an array //now as forEach loops through each delete element in the array for each delete element we will add eventListener
}

  document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
      addTodo();
    });

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

//Todo List version 1

const todoList = []; //intially empty array

function addTodo(){
  //console.log(typeof document.querySelector('.js-name-output')); //object //as inside JS all elements of HTML converetd to objects

  const inputElement = document.querySelector('.js-name-input'); //whole input element stored inside inputElement
  //console.log(typeof inputElement); //object


  const name = inputElement.value; //.value represents input element ke andar ka maal or here value property represents the text that we give as input in the text box
  //console.log(name + ' bittu');
  //console.log(typeof name); //string

  //console.log(todoList);
  todoList.push(name);
  console.log(todoList);

//so type something in the text box and press add, the textbox must get reset to its initial position (i.e empty textbox with just placeholder) // and as a value property represents the text that we give as input in the text box so we can simply change the text/value in the textbox to empty by giving/assigning a empty string to the value property
  inputElement.value = '';
}
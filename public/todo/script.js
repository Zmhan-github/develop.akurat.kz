"use strict";

var todoList = {
  todos: [],

  // displayTodos: function() {
  //   if (this.todos.length === 0) {
  //     console.log('You todo list is empty!');
  //   } else {
  //     console.log('My todos:');
  //     for(var i = 0; i < this.todos.length; i++) {
  //       if (this.todos[i].completed === true) {
  //         console.log('(x)', this.todos[i].todoText);
  //       } else {
  //         console.log('( )', this.todos[i].todoText);
  //       }
  //     }
  //   }
  // },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodo = 0;

    //get number of completed todos.
    for(var i = 0; i < totalTodos; i++){
      if (this.todos[i].completed === true) {
        completedTodo++;
      }
    }

    //case 1: If every true, make every true
    if (totalTodos === completedTodo) {
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    //case 2: Other, make every true;
    } else {
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
  addTodo: function() {
    var addTodoInputText = document.getElementById('addTodoInputText');
    todoList.addTodo(addTodoInputText.value);
    addTodoInputText.value = "";
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.value, changeTodoTextInput.value);
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.value);
    deleteTodoPositionInput.value = "";
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.value);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = "";
    for(var i = 0; i < todoList.todos.length; i++) {
      var todosLi = document.createElement('li');
      var todo = todoList.todos[i];

      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todosLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todosLi);
    }
  }
};
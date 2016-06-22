const ToDoForm = require('./components/todo_form');
const ToDoStore = require('./stores/todo_store');
const ToDoList = require('./components/todo_list');
const React = require('react');
const ReactDOM = require('react-dom');

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<div><ToDoList/><ToDoForm/></div>, document.getElementById("root"));
});

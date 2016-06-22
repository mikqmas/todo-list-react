const React = require('react');
const TodoStore = require('../stores/todo_store');

const TodoForm = React.createClass({
  getInitialState: function() {
    return ({title: "", body: "", done: false});
  },
  render: function(){
    return(
      <form action="/api/todos/" method="POST">
        <label id="title" for="todolist_title">Title</label>
        <input type="text" name="todolist[title]" id="todolist_title"></input>

        <label id="body" for="todolist_body">Body</label>
        <input type="text" name="todolist[body]" id="todolist_body"></input>

        <input type="submit" onClick={this.onChange} value="submit"></input>
      </form>
    );
  },
  onChange: function(e) {
    e.preventDefault();
    debugger
    updateTitle();
    updateBody();
  },
  updateTitle: function(){

  },
  updateBody: function(){

  },
});

module.exports = TodoForm;

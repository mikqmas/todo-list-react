const React = require('react'),
      ToDoStore = require('../stores/todo_store');

const TodoList = React.createClass({
  getInitialState: function() {
    return ({ToDoList: ToDoStore.all()});
  },
  render: function() {
    let realList = Object.keys(this.state.ToDoList);
    realList = realList.map(function(key){
      return this.state.ToDoList[key];
    }.bind(this));

    return(
      <div><ul>
        {
          realList.map(function(list){
            return (<li key={list.id}>
              <TodoListItem item={list}/>
            </li>);
          })
        }
      </ul></div>
  );
  },

  todosChanged(){
    this.setState({ToDoList: ToDoStore.all()});
  },

  componentDidMount(){
    ToDoStore.addHandler(this.todosChanged);
    ToDoStore.fetch();
  },

  componentWillUnmount() {
    ToDoStore.removeHandler(this.todosChanged);
  }
});

const TodoListItem = React.createClass({
  getInitialState: function() {
    return ({item: this.props.item});
  },
  render: function(){
    return(
      <ul>
        <li>Title: {this.state.item.title}</li>
        <li>Body: {this.state.item.body}</li>
      </ul>
    );
  }
});

module.exports = TodoList;

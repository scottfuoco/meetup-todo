import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import Header from '../../components/Header';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../containers/TodoList';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: {
        text: '',
      },
      lastId: 0,
      filter: 'none',
      todos: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  handleInputChange(input, e) {
    const updateInputState = {};
    updateInputState[input] = e.target.value;
    this.setState({ todoInput: { ...this.state.todoInput, ...updateInputState } });
  }

  submitTodo(todo, e) {
    e.preventDefault();
    const { todos } = this.state;
    let { lastId } = this.state;

    this.setState({
      todos: [...todos, { id: lastId, ...todo, complete: false }],
      todoInput: { text: '' },
      lastId: ++lastId,
    },
    );
  }

  deleteCompleted() {
    const todos = this.state.todos.filter(todo => !todo.complete);
    this.setState({ todos });
  }

  deleteTodo(deleteTodo) {
    const todos = this.state.todos.filter(todo => todo.id !== deleteTodo.id);
    this.setState({ todos });
  }

  toggleComplete(newTodo, e) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === newTodo.id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({ todos });
  }

  handleFilterChange(e) {
    this.setState({ filter: e.target.value })
  }

  render() {
    const { todoInput, filter, todos } = this.state;
    return (
      <MuiThemeProvider>
        <Paper className="container">

          <Header title='Todo List' />

          <TodoInput
            todoInput={todoInput}
            handleInputChange={this.handleInputChange}
            submitTodo={this.submitTodo} />

          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            deleteCompleted={this.deleteCompleted}
            handleFilterChange={this.handleFilterChange}
            filter={filter}
            todos={todos} />

        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default App;

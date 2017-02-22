import React, { PropTypes } from 'react';

import TodoBar from '../../components/TodoBar';
import Todo from '../../components/Todo';

const TodoList = ({ todos, toggleComplete, deleteCompleted, deleteTodo, handleFilterChange, filter }) => {
  return (
    <div>
      <TodoBar deleteCompleted={deleteCompleted} handleFilterChange={handleFilterChange} />
      {todos
        .filter(todo => {
          switch (filter) {
            case 'none':
              return todo;
            case 'complete':
              if (todo.complete === true)
                return todo;
              break;
            case 'uncomplete':
              if (todo.complete === false)
                return todo;
              break;
            default:
              break;
          }
          return false;
        })
        .map(todo => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />)}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

TodoList.defaultProps = {
  filter: 'none'
};

export default TodoList;
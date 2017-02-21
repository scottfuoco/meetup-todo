import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import RaisedButton from 'material-ui/RaisedButton';

import './styles.css';

const styles = {
  option: {
    width: 'auto',
    marginLeft: '5%',
  }
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <div className='todoContainer'>
      <h2 >{todo.text}</h2>
      <div className='todoFilters'>
        <Checkbox
          label="Completed"
          onCheck={(e) => toggleComplete(todo, e)}
          checked={todo.complete ? true : false}
          style={styles.option}
        />
        <RaisedButton
          label="Remove"
          style={styles.option}
          onClick={(e) => deleteTodo(todo, e)}
          icon={<ActionDelete />}
        />
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default Todo;
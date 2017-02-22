import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

import './styles.css';

const styles = {
  title: {
    marginBottom: '20px',
  },
  submit: {
    alignSelf: 'flex-end',
  }
}

const TodoInput = ({ todoInput, handleInputChange, submitTodo }) => {
  return (
    <div className="inputContainer">
      <form onSubmit={(e) => submitTodo(todoInput, e)}>
        <TextField
          floatingLabelText="Title"
          style={styles.title}
          fullWidth={true}
          value={todoInput.text}
          onChange={(e) => handleInputChange('text', e)}
        />
      </form>
    </div>
  );
};

TodoInput.propTypes = {
  todoInput: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  submitTodo: PropTypes.func.isRequired,
}

export default TodoInput;
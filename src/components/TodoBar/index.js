import React, { PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  toolbarGroup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  radioButtonGroup: {
    width: '60%',
    display: 'flex',
  },
  radioButton: {
    width: '33%',
  }
}

const TodoBar = ({ deleteCompleted, filterComplete, filterUncomplete, handleFilterChange }) => {
  return (
    <Toolbar style={styles.toolbar}>
      <ToolbarGroup style={styles.toolbarGroup}>
        <RadioButtonGroup name="todoFilter" defaultSelected="none" onChange={(e) => handleFilterChange(e)} style={styles.radioButtonGroup}>
          <RadioButton
            value="none"
            label="Show All"
            style={styles.radioButton}
          />
          <RadioButton
            value="uncomplete"
            label="Show Uncomplete"
            style={styles.radioButton}
          />
          <RadioButton
            value="complete"
            label="Show Complete"
            style={styles.radioButton}
          />
        </RadioButtonGroup>

        <RaisedButton
          label="Remove Completed"
          primary={true}
          onClick={(e) => deleteCompleted()}
          icon={<ActionDelete />}
        />
      </ToolbarGroup>
    </Toolbar>
  );
};

TodoBar.propTypes = {
  deleteCompleted: PropTypes.func.isRequired,
  filterComplete: PropTypes.func.isRequired,
  filterUncomplete: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
}

export default TodoBar;
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask } from '../actions/actionCreator';

import AddTaskForm from '../components/addTaskForm/addTaskForm'
import TableList from './table-list'
import './main.css';


function Main(props) {

  const [inputDate, setInputDate] = useState('');
  const [inputTypeSport, setinputTypeSport] = useState('');
  const [inputKm, setInputKm] = useState('');
  const [inputComment, setInputComment] = useState('');

  function handleInputDateChange({ target: { value } }) {
    setInputDate(value);
  }

  function handleSelectChange({ target: { value } }) {
    setinputTypeSport(value);
  }

  function handleInputChange({ target: { value } }) {
    setInputKm(value);
  }

  function handleTextAreaChange({ target: { value } }) {
    setInputComment(value);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const { addTask } = props;
    addTask((new Date()).getTime(),
      inputDate,
      inputTypeSport,
      inputKm,
      inputComment);

    setInputDate('');
    setinputTypeSport('');
    setInputKm('');
    setInputComment('');
  }
  const { tasks } = props;
  const isTasksExist = tasks && tasks.length > 0;
  /* AddTaskForm: название пропса и значение пропса названы одинаково*/
  return (
    <Fragment>
      <AddTaskForm
        inputDate={inputDate}
        inputTypeSport={inputTypeSport}
        inputKm={inputKm}
        inputComment={inputComment}
        handleInputDateChange={handleInputDateChange}
        handleSelectChange={handleSelectChange}
        handleInputChange={handleInputChange}
        handleTextAreaChange={handleTextAreaChange}
        handleAdd={handleAdd}
      />
      {isTasksExist && <TableList tasksList={tasks} />}
    </Fragment>
  )
}

export default connect(state => ({
  tasks: state.tasks,
  //filters: state.filters,
}), { addTask, removeTask })(Main);



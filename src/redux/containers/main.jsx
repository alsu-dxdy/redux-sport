import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask, changeFilter } from '../actions/actionCreator';

import AddTaskForm from '../components/addTaskForm/addTaskForm';
import TableList from './table-list';
import FilterRow from '../components/filter-row/filter-row'
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

  // filterTasks прин з-чи и зн акт ф-ра
  // После чего ф-ет з-чи по типу акт-сти и воз-ет new массив
  const filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'running':
        return tasks.filter(task => task.typeSport === 'Running');
        break;
      case 'cycling':
        return tasks.filter(task => task.typeSport === 'Cycling');
        break;
      case 'skiing':
        return tasks.filter(task => task.typeSport === 'Skiing');
        break;
      case 'walking':
        return tasks.filter(task => task.typeSport === 'Walking');
        break;
      default:
        return tasks;
    }
  }

  const { tasks, removeTask, filters, changeFilter } = props;
  const isTasksExist = tasks && tasks.length > 0;
  const filteredTasks = filterTasks(tasks, filters);

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
      <div className="main-wrapper">
        {isTasksExist && <FilterRow activeFilter={filters} changeFilter={changeFilter} />}
        {isTasksExist ? (
          <TableList tasksList={filteredTasks} removeTask={removeTask} />
        ) : (
            <h3 className="main__text">Just do it!</h3>
          )}

      </div>
    </Fragment>
  )
}

export default connect(state => ({
  tasks: state.tasks,
  filters: state.filters,
}), { addTask, removeTask, changeFilter })(Main);



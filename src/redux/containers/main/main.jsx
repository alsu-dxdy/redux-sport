import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask, changeFilter, changeSorter } from '../../actions/actionCreator';

import AddTaskReduxForm from '../../components/addTaskForm/addTaskForm';
import TableList from '../../components/table-list/table-list';
import FilterRow from '../../components/filter-row/filter-row';
import SorterRow from '../../components/sorter-row/sorter-row'

import { filterTasks, sorterTasks } from '../../utils/utils';
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

  const { tasks, removeTask, filter, sorter, changeFilter, changeSorter } = props;
  const isTasksExist = tasks && tasks.length > 0;
  const filteredTasks = filterTasks(tasks, filter,);
  const sorteredTasks = sorterTasks(filteredTasks, sorter);
  /* AddTaskForm: название пропса и значение пропса названы одинаково*/
  return (
    <Fragment>
      <AddTaskReduxForm
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
        {isTasksExist && <FilterRow activeFilter={filter} changeFilter={changeFilter} />}
        {isTasksExist && <SorterRow activeSorter={sorter} changeSorter={changeSorter} />}

        {isTasksExist ? (
          <TableList tasksList={sorteredTasks} removeTask={removeTask} />
        ) : (
            <h3 className="main__text">Just do it!</h3>
          )}
      </div>
    </Fragment>
  )
}

export default connect(state => ({
  tasks: state.tasks,
  filter: state.filter,
  sorter: state.sorter,
}), { addTask, removeTask, changeFilter, changeSorter })(Main);



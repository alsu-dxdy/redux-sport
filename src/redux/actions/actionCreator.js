import { ADD_TASK, REMOVE_TASK, CHANGE_FILTER } from '../../constants';

export const addTask = (id, date, typeSport, km, comment) => ({
  type: ADD_TASK,
  id, date, typeSport, km, comment
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter
});
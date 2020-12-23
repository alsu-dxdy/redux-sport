import { ADD_TASK, REMOVE_TASK, CHANGE_FILTER, CHANGE_SORTER } from '../../constants';

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

export const changeSorter = activeSorter => ({
  type: CHANGE_SORTER,
  activeSorter
});
import { ADD_TASK, REMOVE_TASK } from '../../constants';

const TASKS = [
];

const tasks = (state = TASKS, { id, date, typeSport, km, comment, type }) => {

  switch (type) {
    case ADD_TASK:
      return [
        ...state, {
          id, date, typeSport, km, comment
        }
      ];
    case REMOVE_TASK:
      // возвращаем только несовпадения с полученным id
      return [...state].filter(task => task.id !== id);

    default:
      return state;
  }
}

export default tasks;

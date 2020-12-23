import { combineReducers } from 'redux';
import tasks from './tasks';
// import { filters, sorter } from './filters';
import { filter } from './filters';
import { sorter } from './filters';

const rootReducer = combineReducers({ tasks, filter, sorter });

export default rootReducer;

import { combineReducers } from 'redux';
import tasks from './tasks';
// import { filters, sorter } from './filters';
import { filter } from './filters';
import { sorter } from './filters';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ tasks, filter, sorter, form: formReducer });

export default rootReducer;

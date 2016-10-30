import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ideas from './ideas.js';

const rootReducer = combineReducers({ ideas, routing: routerReducer });

export default rootReducer;

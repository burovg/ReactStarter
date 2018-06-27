import {combineReducers} from 'redux';

import CheckState from './myreducer';

const reducers = combineReducers({
    compa : CheckState
});

export default reducers;
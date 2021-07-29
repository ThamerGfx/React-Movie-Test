import {combineReducers} from 'redux';
import {moviesReducer} from './movie'

const rootReducer= combineReducers({
    moviesRed:moviesReducer,
})

export default rootReducer;
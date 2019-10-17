import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
console.log("Reducers index");

export default combineReducers({
    auth:AuthReducer
    
});
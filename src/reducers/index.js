import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

console.log("Reducers index");

export default combineReducers({
    auth:AuthReducer,
    EmployeeForm:EmployeeFormReducer
    
});
import { createStore, combineReducers, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk';
 
import { composeWithDevTools } from 'redux-devtools-extension';
import AuthReducer from '../Reducer/AuthReducer';
import ProfileReducer from '../Reducer/ProfileReducer';
import BidsReducer from './../Reducer/BidsReducer';

 
 
const middleware = applyMiddleware(thunk)

const combinedReducer = combineReducers({
    Auth: AuthReducer,
    Profile:ProfileReducer,
    Bids:BidsReducer
})

export const store = createStore(combinedReducer, composeWithDevTools(middleware))
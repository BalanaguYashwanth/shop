import {createStore,combineReducers ,applyMiddleware} from 'redux'
import myreducer from '../reducers/reducer'
import thunk from 'redux-thunk'

//const reducers=combineReducers(myreducer)

const store = createStore(myreducer,applyMiddleware(thunk))

export default store

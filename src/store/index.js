import {createStore} from 'redux'
import myreducer from '../reducers/reducer'

const store = createStore(myreducer)

export default store

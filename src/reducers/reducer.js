import axios from 'axios'

const initialstate={
    data:[],
    token:[]
}

function myreducer(state=initialstate,action){
    if(action.type=='UPDATE_DATA')
    {
        return {
            ...state,
            data:action.data
        }
    }
    return state
}   

export default myreducer

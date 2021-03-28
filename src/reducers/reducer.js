import axios from 'axios'

const initialstate={
    data:[],
}

function myreducer(state=initialstate,action){
    if(action.type=='ADD_DATA')
    {
        var result = axios.get('http://127.0.0.1:8000/api/neworder/')
        return {
            ...state,
            data:[{id: 1, name: 'yash', itemname: 'furtuniture', companyname: 'Berg furniture', dimensions: '22-22-22', quantities: '4', address: '315,29th street, kamber colony,annanagarwest,chennai' },{id: 3, name: 'yash', itemname: 'furtuniture', companyname: 'Berg furniture', dimensions: '22-22-22', quantities: '4', address: '315,29th street, kamber colony,annanagarwest,chennai' }]
        }
    }
    return state
}   

export default myreducer

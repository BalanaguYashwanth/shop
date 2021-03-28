import axios from 'axios'

const initialstate={
    data:[],
    data1:[]
}

function myreducer(state=initialstate,action){
    if(action.type=='UPDATE_DATA')
    {
        //console.log('in',action.data)
        //var result = axios.get('http://127.0.0.1:8000/api/neworder/')
        //console.log('result',result.data)
        return {
            ...state,
            //data:[{id: 1, name: 'yash', itemname: 'furtuniture', companyname: 'Berg furniture', dimensions: '22-22-22', quantities: '4', address: '315,29th street, kamber colony,annanagarwest,chennai' },{id: 3, name: 'yash', itemname: 'furtuniture', companyname: 'Berg furniture', dimensions: '22-22-22', quantities: '4', address: '315,29th street, kamber colony,annanagarwest,chennai' }]
            data:action.data
        }
    }
    return state
}   

export default myreducer

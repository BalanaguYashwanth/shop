import axios from 'axios'

function updatedata(){
    return function(dispatch){
        axios.get('http://127.0.0.1:8000/api/neworder/')
        .then(res=>{
            console.log(res.data)
            dispatch({type:'UPDATE_DATA',data:res.data})            
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:'UPDATE_DATA',data:err.response})
        })

    }
}
export default updatedata()

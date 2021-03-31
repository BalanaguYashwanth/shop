import axios from 'axios'

function updatedata(){
    return function(dispatch){
        axios.get('https://4cc43e3d97ab.ngrok.io/api/neworder/')
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

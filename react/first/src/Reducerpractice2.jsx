import React, { useReducer } from 'react'

const Reducerpractice2 = () => {

    function reducers(state , action ){
        if(action.task ==="increment count"){
            let copyObj = {...state , count: state.count+1}
            return  copyObj
        }
        if(action.task === "updateName"){
                   return {...state , data:{...state.data, name:action.val}}
        }
    }
    const [state , disptach ] = useReducer( reducers  , {
        data:{name:"john", email:"john@gmail.com"},
        count: 10
    } )


    function handleIncrement(){
        // console.log("running")
        disptach({task:"increment count"})
    }
  return (
    <div>
        <p>userName = {state.data.name} </p>
        <p>userEmail = {state.data.email} </p>
        <p>Count : {state.count}</p>


        <button onClick={handleIncrement}>Update Count</button>
        <button onClick={()=>disptach({task:"updateName" , val:"Nick"})}>Update Name</button>
        <button>Update Email</button>
    </div>
  )
}

export default Reducerpractice2

import React, { useReducer } from 'react'

const Reducerpractice2 = () => {

    function reducers(state , action ){
        if(action.task ==="increment count"){
            let copyObj = {...state , count: state.count+1}
            return  copyObj
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
        <button>Update Name</button>
        <button>Update Email</button>
    </div>
  )
}

export default Reducerpractice2

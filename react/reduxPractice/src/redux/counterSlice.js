import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    arr:[10, 20, 30, 40],
    user:{name:"one", email:"one@gmail.com"},
   
  },
  reducers: {
    changeNamer:(state ,action)=>{
        console.log(action.payload) //undertaker
        state.user.name = action.payload
    },
    increment: (state, action)=> {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment,changeNamer, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
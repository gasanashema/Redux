import { createSlice } from "@reduxjs/toolkit";
const initialStateValue =''
export const theme:{} = createSlice({
    name:'theme',
    initialState: {value:initialStateValue},
    reducers:{
        changeColor: (state,action)=>{
            state.value = action.payload;

        },
        
    }

})

export const {changeColor} = theme.actions;

export default theme.reducer;
import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'Search',
    initialState:{
        //empty object
    },
    reducers:{
        cacheResult:(state,action)=>{
            //state=Object.assign(state,action.payload)
            return {...state,...action.payload}
        }
    }
})


export const {cacheResult}=searchSlice.actions;
export default searchSlice.reducer;
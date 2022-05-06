import {createSlice} from "@reduxjs/toolkit";

export const slice=createSlice({
    name:"pooja",
    initialState:{
        Firstname:"",
        Lastname:"",
        Image:""
    

    },
    reducers:{
        updateFName:(state,action) => {
            state.Firstname=action.payload.fname;
            console.log(state.Firstname);
        },
        updateLName:(state,action) => {
            state.Lastname=action.payload.lname;
            console.log(state.Lastname);
        },
        updateImage:(state,action) => {
            state.Image=action.payload.image;
            console.log(state.Image);
        }
        
    }
});
export const{updateFName}=slice.actions;
export const{updateLName}=slice.actions;
export const{updateImage}=slice.actions;
export default slice.reducer;
import { configureStore,createSlice } from "@reduxjs/toolkit";

const formSLice=createSlice({
    name: 'form',
    initialState: [],
    reducers :{
        submitForm :(state,action)=>{
            state.push(action.payload);
        },
    },
});

export const {submitForm}=formSLice.actions;

const store=configureStore({
    reducer: {
        form : formSLice.reducer,
    },
});

export default store;
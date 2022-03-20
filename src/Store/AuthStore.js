import { configureStore, createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'auth',
    initialState:{isAuthenticated:localStorage.getItem('LoggedIn')},
    reducers:{
        login(state){
            state.isAuthenticated = true;
            localStorage.setItem('LoggedIn', true);
        },
        logout(state){
            localStorage.removeItem('LoggedIn');
            state.isAuthenticated = false;
        }
    }
});

export default authSlice;
export const authActions = authSlice.actions;
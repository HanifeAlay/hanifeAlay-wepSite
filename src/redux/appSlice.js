import { createSlice } from "@reduxjs/toolkit";


/*
    * Bu projede Redux sadece 1 amaçla kullanılecek şimidlik:
        Light / Dark Modu için.
    
    * Neden Redux ?
        Mode bilgisi birden fazla yerde lazım olabilir (Hero, Project, Contact vs).
*/
const initialState = {
    mode: "light", 
};

const appSlice = createSlice ( {
    name: "app",
    initialState, 
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setMode: (state, action) => {
            state.mode = action.payload;
        },
    },
});


export const { toggleMode, setMode } = appSlice.actions;
export const selectMode = (state) => state.app.mode;
export default appSlice.reducer;
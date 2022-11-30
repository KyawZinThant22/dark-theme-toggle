import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  darkMode: localStorage.getItem("darkMode") === "false" ? false : true,
  //   darkMode: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode);
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;

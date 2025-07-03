import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../features/SidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

export default store;

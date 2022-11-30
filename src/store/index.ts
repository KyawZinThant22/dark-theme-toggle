import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/theme";

// reducers

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

const { dispatch } = store;

export { dispatch };

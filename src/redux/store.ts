import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./apis";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userReducer from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

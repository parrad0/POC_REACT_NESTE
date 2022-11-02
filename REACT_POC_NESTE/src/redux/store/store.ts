import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { app } from "../reducer/app";

export const store = configureStore({
  reducer: {
    app: app.reducer,
    //  [flatApi.reducerPath]: flatApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

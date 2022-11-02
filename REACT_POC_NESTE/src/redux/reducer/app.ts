/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-useless-computed-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

export interface InitialState {
  editMenu: boolean;
  data: string[];
  highlightData: string;
}

const initialState: InitialState = {
  editMenu: false,
  data: ["Sample1", "Sample2"],
  highlightData: "",
};
// FLAT REDUCER
export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    editMenu: (state) => {
      return produce(state, (draftstate) => {
        draftstate.editMenu = !draftstate.editMenu;
      });
    },
    setHighlight: (state, action: PayloadAction<string>) => {
      return produce(state, (draftstate) => {
        draftstate.highlightData = action.payload;
      });
    },
  },
});
export const { editMenu, setHighlight } = app.actions;

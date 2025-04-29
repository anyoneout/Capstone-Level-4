import { configureStore, ConfigureStoreOptions, createSlice, CreateSliceOptions } from "@reduxjs/toolkit";
import { stateSetters } from "./stateSetters";
import { stateVariables } from "./stateVariables";

const sliceOptions: CreateSliceOptions = {
  name: "global",
  initialState: stateVariables,
  reducers: stateSetters,
};
const slice = createSlice(sliceOptions);

export const set = slice.actions;
const storeOptions: ConfigureStoreOptions = { reducer: slice.reducer };
export const store = configureStore(storeOptions);

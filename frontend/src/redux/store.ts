import { configureStore, ConfigureStoreOptions, createSlice, CreateSliceOptions } from "@reduxjs/toolkit";
import { stateSetters } from "./stateSetters";
import { stateVariables } from "./stateVariables";

const sliceOptions: CreateSliceOptions = {
  name: "global",
  initialState: stateVariables,
  reducers: stateSetters,
};
const slice = createSlice(sliceOptions); //creates a new object using the redux createSlice method with the sliceOptions object properties

export const set = slice.actions; // an object of actions
const storeOptions: ConfigureStoreOptions = { reducer: slice.reducer }; //the slice object contains the reducer property, ConfigureStoreOptions is a type
export const store = configureStore(storeOptions);

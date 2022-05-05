//Responsible for storing variables That Control behavior of app
import { createSlice } from '@reduxjs/toolkit';
import colors from '../../assets/colors';

const initialState = {
  isLoaderVisible: false, //Sets visibility of Loading Indicator across the app
  loadingText: '', //Sets the text for loading Indictor
  appColorSolid: colors.malachite, //The Green color, peculiar to the app - by default
};

export const appVariableSlice = createSlice({
  name: 'appVariableSlice', //Name of the slice
  initialState,
  reducers: {
    setIsLoadingIndicatorDisplayed: (state, action) => {
      state.isLoaderVisible = action.payload.isLoaderVisible;
    },
    setLoadingIndicatorText: (state, action) => {
      state.loadingText = action.payload.loadingText;
    },
    setAppColorSolid: (state, action) => {
      state.appColorSolid = action.payload.appColorSolid;
    },
  },
});

export const { setIsLoadingIndicatorDisplayed, setLoadingIndicatorText, setAppColorSolid } = appVariableSlice.actions;

//Selectors -> Creating individual selector for every item
//Used to select/pull the data
export const selectIsLoadingIndicatorDisplayed = (state) => state.appVariable.isLoaderVisible;
export const selectLoadingIndicatorText = (state) => state.appVariable.loadingText;
export const selectAppColorSolid = (state) => state.appVariable.appColorSolid;

export default appVariableSlice.reducer; //Export this by default to whichever file imports it first.

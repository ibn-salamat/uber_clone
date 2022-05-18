import {createSlice} from '@reduxjs/toolkit';
import {TypeNavSliceState} from '@/interfaces/store';

const initialState: TypeNavSliceState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
};

export const navSlice = createSlice({
  name: 'nav ',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    },
  },
});

export const {setDestination, setOrigin, setTravelTimeInfo} = navSlice.actions;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Point} from 'react-native-google-places-autocomplete';

import {TypeNavSliceState} from 'src/interfaces/store';

const initialState: TypeNavSliceState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
};

export const navSlice = createSlice({
  name: 'nav ',
  initialState,
  reducers: {
    setOrigin: (
        state: TypeNavSliceState,
        action: PayloadAction<{ location: Point; description: string }>,
    ) => {
      // state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInfo: (state, action) => {
      state.travelTimeInfo = action.payload;
    },
  },
});

export const {setDestination, setOrigin, setTravelTimeInfo} =
  navSlice.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type MainLayoutState = {
  hasButtonBack: boolean,
}

const initialState: MainLayoutState = {
  hasButtonBack: false,
};

export const mainLayoutSlice = createSlice({
  name: 'mainLayout',
  initialState,
  reducers: {
    setButtonBack: (state, { payload }: PayloadAction<boolean>) => {
      state.hasButtonBack = payload;
    },
  },
});
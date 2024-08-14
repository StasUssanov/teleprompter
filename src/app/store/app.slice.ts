import { createSlice } from '@reduxjs/toolkit';

export type AppState = {
  // workspace?: Workspace | null,
  // point?: Point | null,
}

const initialState: AppState = {
  // workspace: null,
  // point: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // setWorkspace: (state, { payload }: PayloadAction<Workspace | null>) => {
    //   if (state.workspace !== payload) {
    //     state.workspace = payload;
    //   }
    // },
    // setPoint: (state, { payload }: PayloadAction<Point | null>) => {
    //   if (state.workspace !== payload) {
    //     state.point = payload;
    //   }
    // },
  }
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateLocalStorage } from '../../../shared/lib/update-local-storage';

enum LAYOUT_SLICE {
  LEFT_SIDER_COLLAPSED = 'LEFT_SIDER_COLLAPSED',
  RIGHT_SIDER_COLLAPSED = 'RIGHT_SIDER_COLLAPSED',
}

export type LayoutState = {
  leftSiderCollapsed: boolean,
  rightSiderCollapsed: boolean,
}

const initialState: LayoutState = {
  leftSiderCollapsed: localStorage.getItem(LAYOUT_SLICE.LEFT_SIDER_COLLAPSED) === 'true',
  rightSiderCollapsed: localStorage.getItem(LAYOUT_SLICE.RIGHT_SIDER_COLLAPSED) === 'true',
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLeftSiderCollapsed: (state, { payload }: PayloadAction<boolean>) => {
      state.leftSiderCollapsed = payload;
      updateLocalStorage(LAYOUT_SLICE.LEFT_SIDER_COLLAPSED, payload);
    },
    setRightSiderCollapsed: (state, { payload }: PayloadAction<boolean>) => {
      state.rightSiderCollapsed = payload;
      updateLocalStorage(LAYOUT_SLICE.RIGHT_SIDER_COLLAPSED, payload);
    },
  }
});
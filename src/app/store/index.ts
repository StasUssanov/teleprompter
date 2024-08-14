import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './app.slice';
import { layoutSlice } from '../../entities/layout';
import { mainLayoutSlice } from '../../widgets/main-layout';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    layout: layoutSlice.reducer,
    mainLayout: mainLayoutSlice.reducer,
    // [pointApi.reducerPath]: pointApi.reducer,
    // [workspaceApi.reducerPath]: workspaceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  // .concat(pointApi.middleware)
  // .concat(workspaceApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
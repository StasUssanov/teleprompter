import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { layoutSlice } from '../../../entities/layout';
import { mainLayoutSlice, MainLayoutState } from './main-layout.slice';

export const useMainLayout = () => {
  const layoutState = useSelector((state: RootState) => state.layout);
  const mainLayoutState = useSelector((state: RootState) => state.mainLayout);

  const dispatch: AppDispatch = useDispatch();
  const setLeftSiderCollapsed = (value: boolean) => dispatch(layoutSlice.actions.setLeftSiderCollapsed(value));
  const setRightSiderCollapsed = (value: boolean) => dispatch(layoutSlice.actions.setRightSiderCollapsed(value));
  const setButtonBackVisible = (value: MainLayoutState['hasButtonBack']) => dispatch(mainLayoutSlice.actions.setButtonBack(value));

  return {
    ...layoutState,
    ...mainLayoutState,
    setLeftSiderCollapsed,
    setRightSiderCollapsed,
    setButtonBackVisible,
  };
};
import { TypedUseSelectorHook, useSelector as useSelectorRedux } from 'react-redux';
import { RootState } from 'renderer/store';

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;

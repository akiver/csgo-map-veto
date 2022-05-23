import { useDispatch as useDispatchRedux } from 'react-redux';
import { store } from './store';

export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => {
  return useDispatchRedux<AppDispatch>();
};

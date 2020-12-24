import { createSelectorHook } from 'react-redux';
import { RootState } from 'src/store';

export const useSelector = createSelectorHook<RootState>();

import notesReducer from '@services/note';
import { NotesType } from '@services/note';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from '@services/utils/localStorage';
import throttle from 'lodash/throttle';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export type RootState = {
  notes: NotesType;
};

const rootReducer = combineReducers({
  notes: notesReducer,
});

const persistedState = loadStateFromLocalStorage();
export const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(
  throttle(() => {
    saveStateToLocalStorage({
      notes: store.getState().notes,
    });
  }, 1000),
);

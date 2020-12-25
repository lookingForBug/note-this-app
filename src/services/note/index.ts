const CREATE_NOTE = 'note/create';
const UPDATE_NOTE = 'note/update';
const DELETE_NOTE = 'note/delete';

export type NoteType = {
  id: string;
  title: string;
  text: string;
  createdAt: number;
};

export type NotesType = NoteType[];

type CreateNoteAction = {
  type: typeof CREATE_NOTE;
  payload: NoteType;
};

type UpdateNoteAction = {
  type: typeof UPDATE_NOTE;
  payload: NoteType;
};

type DeleteNoteAction = {
  type: typeof DELETE_NOTE;
  payload: string;
};

type NoteActionTypes = CreateNoteAction | UpdateNoteAction | DeleteNoteAction;

const initialState = [] as NotesType;

function createNote(note: NoteType): CreateNoteAction {
  return {
    type: CREATE_NOTE,
    payload: note,
  };
}

function updateNote(note: NoteType): UpdateNoteAction {
  return {
    type: UPDATE_NOTE,
    payload: note,
  };
}

function deleteNote(id: string): DeleteNoteAction {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}

export const actions = {
  createNote,
  updateNote,
  deleteNote,
};

export default function reducer(state = initialState, action: NoteActionTypes): NotesType {
  switch (action.type) {
    case CREATE_NOTE:
      return [...state, action.payload];
    case UPDATE_NOTE:
      return state.map((item) => (item.id === action.payload.id ? { ...item, ...action.payload } : item));
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
}

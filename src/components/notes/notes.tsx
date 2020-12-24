import React, { ReactElement } from 'react';

import { NotesType } from '@services/note';

import { Note } from './components/note';

type Props = {
  notes: NotesType;
};

export function Notes({ notes }: Props): ReactElement {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
}

import React, { ReactElement } from 'react';

import { NoteCreatorModal } from '@components/note-creator-modal';
import { Notes } from '@components/notes';
import { useSelector } from '@services/utils/useSelector';

export function Home(): ReactElement {
  const notes = useSelector((state) => state.notes);

  return (
    <>
      <h1>Notes This!</h1>
      <NoteCreatorModal />
      <Notes notes={notes} />
    </>
  );
}

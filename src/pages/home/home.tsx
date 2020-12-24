import React, { ReactElement } from 'react';

import { Layout } from '@components/layout';
import { NoteCreator } from '@components/note-creator';
import { Notes } from '@components/notes';
import { useSelector } from '@services/utils/useSelector';

export function Home(): ReactElement {
  const notes = useSelector((state) => state.notes);

  return (
    <Layout>
      <h1>Notes This!</h1>
      <NoteCreator />
      <Notes notes={notes} />
    </Layout>
  );
}

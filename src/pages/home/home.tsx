import React, { ReactElement } from 'react';

import { Layout } from '@components/layout';
import { Note } from '@components/note';
import { NoteCreator } from '@components/note-creator';

export function Home(): ReactElement {
  return (
    <Layout>
      <h1>Notes This!</h1>
      <NoteCreator />
      <Note title="hello" text="this is my first note" createdAt={1608369921358} color="violet" />
    </Layout>
  );
}

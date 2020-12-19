import React, { FC } from 'react';

import { Layout } from '@components/layout';
import { Note } from '@components/note';

export const Home: FC = () => {
  return (
    <Layout>
      <h1>Notes This!</h1>
      <Note title="hello" text="this is my first note" createdAt={1608369921358} color="violet" />
    </Layout>
  );
};

import React, { FC, Suspense } from 'react';

import { Route } from 'react-router';

type Props = {
  component?: React.FC;
  exact?: boolean;
  path: string;
};

const SuspenceFallback: FC = () => <span>Loading</span>;

export const RouteApp: FC<Props> = ({ component: Component, children, exact, path }) => (
  <Route exact={exact} path={path}>
    <Suspense fallback={SuspenceFallback}>{Component ? <Component /> : children}</Suspense>
  </Route>
);

import React, { PropsWithChildren, ReactElement } from 'react';

import classNames from 'classnames/bind';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

type Props = PropsWithChildren<{
  background?: string;
}>;

export function Layout({ children, background = '#fff' }: Props): ReactElement {
  return (
    <div style={{ background }} className={cx('content')}>
      {children}
    </div>
  );
}

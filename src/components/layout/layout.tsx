import React, { FC } from 'react';

import classNames from 'classnames/bind';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

type Props = {
  background?: string;
};

export const Layout: FC<Props> = ({ children, background = '#fff' }) => (
  <div style={{ background }} className={cx('content')}>
    {children}
  </div>
);

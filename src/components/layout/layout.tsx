import React, { PropsWithChildren, ReactElement } from 'react';

import { CONTACT_URL } from '@services/utils/constants';
import classNames from 'classnames/bind';

import styles from './layout.module.scss';

const cx = classNames.bind(styles);

type Props = PropsWithChildren<{
  background?: string;
}>;

export function Layout({ children, background = '#fff' }: Props): ReactElement {
  return (
    <>
      <header className={cx('header')}>
        <div className={cx('content-centerer')}>
          <h1 className={cx('title')}>Note This!</h1>
        </div>
      </header>
      <div style={{ background }} className={cx('content', 'content-centerer')}>
        {children}
      </div>
      <footer className={cx('footer')}>
        <span className={cx('footer-text')}>
          created by{' '}
          <a href={CONTACT_URL} target="_blank" rel="noreferrer">
            Alexander Alekseev
          </a>
        </span>
      </footer>
    </>
  );
}

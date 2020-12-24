import React, { ReactElement } from 'react';

import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import styles from './note.module.scss';

const cx = classNames.bind(styles);
dayjs.extend(relativeTime);

type CategoryType = {
  id: string;
  alias: string;
};

type Props = {
  title?: string;
  text: string;
  category?: CategoryType;
  createdAt: number;
  color?: string;
};

export function Note({ title, text, category, createdAt, color = '#fff' }: Props): ReactElement {
  const datetime = dayjs(createdAt).fromNow();

  return (
    <div style={{ backgroundColor: color }} className={cx('note')}>
      {title && <h3>{title}</h3>}
      <span>{text}</span>
      <div>
        {category && <span>{category.alias}</span>}
        <span>{datetime}</span>
      </div>
    </div>
  );
}

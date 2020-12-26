import React, { ReactElement } from 'react';

import { NoteUpdaterModal } from '@components/note-updater-modal';
import { actions, NoteType } from '@services/note';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useDispatch } from 'react-redux';

import styles from './note.module.scss';

const cx = classNames.bind(styles);
dayjs.extend(relativeTime);

export function Note({ id, title, text, timestamp, isUpdated }: NoteType): ReactElement {
  const datetime = dayjs(timestamp).fromNow();
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(actions.deleteNote(id));
  };

  return (
    <div className={cx('note')}>
      {title && <h3>{title}</h3>}
      <span>{text}</span>
      <div>
        <span>
          {isUpdated ? 'Updated ' : 'Created '}
          {datetime}
        </span>
        <div>
          <NoteUpdaterModal id={id} editableData={{ title, text }} />
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
}

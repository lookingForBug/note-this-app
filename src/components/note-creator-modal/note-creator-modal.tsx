import React, { ReactElement, useRef } from 'react';

import { Modal } from '@components/modal';
import { ModalHandle } from '@components/modal/modal';
import { NoteForm } from '@components/note-form/intex';
import { NoteCreatorFormValues } from '@components/note-form/note-form';
import { actions } from '@services/note';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

export function NoteCreatorModal(): ReactElement {
  const modal = useRef<ModalHandle>(null);

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<NoteCreatorFormValues> = (data) => {
    const note = {
      ...data,
      id: v4(),
      createdAt: Date.now(),
    };

    dispatch(actions.createNote(note));
    modal.current?.close();
  };

  return (
    <div>
      <button
        onClick={() => {
          modal.current?.open();
        }}
      >
        Create
      </button>
      <Modal ref={modal}>
        <NoteForm submitButton="Create" onSubmit={onSubmit} />
      </Modal>
    </div>
  );
}

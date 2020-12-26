import React, { ReactElement, useRef } from 'react';

import { Modal } from '@components/modal';
import { ModalHandle } from '@components/modal/modal';
import { NoteCreatorFormValues, NoteForm } from '@components/note-form/note-form';
import { actions, NoteType } from '@services/note';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

type EditableDataType = Pick<NoteType, 'title' | 'text'>;

type Props = {
  id: string;
  editableData: EditableDataType;
};

export function NoteUpdaterModal({ editableData, id }: Props): ReactElement {
  const modal = useRef<ModalHandle>(null);

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<NoteCreatorFormValues> = (data) => {
    const note: NoteType = {
      ...data,
      id,
      timestamp: Date.now(),
      isUpdated: true,
    };

    dispatch(actions.updateNote(note));
    modal.current?.close();
  };

  return (
    <div>
      <button
        onClick={() => {
          modal.current?.open();
        }}
      >
        Edit
      </button>
      <Modal ref={modal}>
        <NoteForm submitButton="Update" onSubmit={onSubmit} defaultValues={editableData} />
      </Modal>
    </div>
  );
}

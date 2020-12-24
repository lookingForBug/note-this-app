import React, { ReactElement, useRef } from 'react';

import { Modal } from '@components/modal';
import { ModalHandle } from '@components/modal/modal';
import { actions } from '@services/note';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

type NoteCreatorFormValues = {
  title: string;
  text: string;
};

export function NoteCreator(): ReactElement {
  const modal = useRef<ModalHandle>(null);
  const { register, handleSubmit } = useForm();

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Title" name="title" ref={register} />
          <input type="text" placeholder="Write your note here" name="text" ref={register({ required: true })} />
          <button type="submit">Create</button>
        </form>
      </Modal>
    </div>
  );
}

import React, { ReactElement, useRef } from 'react';

import { Modal } from '@components/modal';
import { ModalHandle } from '@components/modal/modal';
import { SubmitHandler, useForm } from 'react-hook-form';

type NoteCreatorFormValues = {
  title: string;
  text: string;
};

export function NoteCreator(): ReactElement {
  const modal = useRef<ModalHandle>(null);
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<NoteCreatorFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <button
        onClick={() => {
          modal.current && modal.current.open();
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

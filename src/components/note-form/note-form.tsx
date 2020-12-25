import React, { ReactElement } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

export type NoteCreatorFormValues = {
  title: string;
  text: string;
};

type Props = {
  defaultValues?: NoteCreatorFormValues;
  onSubmit: SubmitHandler<NoteCreatorFormValues>;
  submitButton: string;
};

export function NoteForm({ defaultValues, onSubmit, submitButton }: Props): ReactElement {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title" name="title" ref={register} />
      <input type="text" placeholder="Write your note here" name="text" ref={register({ required: true })} />
      <button type="submit">{submitButton}</button>
    </form>
  );
}

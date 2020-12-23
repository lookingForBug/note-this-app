import React, { forwardRef, PropsWithChildren, useCallback, useEffect, useImperativeHandle, useState } from 'react';

import classNames from 'classnames/bind';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';

const cx = classNames.bind(styles);
const modalRoot = document.getElementById('modal-root');

type Props = PropsWithChildren<{
  defaultOpened?: boolean;
  fade?: boolean;
}>;

export type ModalHandle = {
  open: () => void;
  close: () => void;
};

export const Modal = forwardRef<ModalHandle, Props>(({ children, fade = false, defaultOpened = false }: Props, ref) => {
  if (!modalRoot) {
    return null;
  }
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpened);
  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close],
  );

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape, false);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className={cx('modal', { 'modal-fade': fade })}>
        <div className={cx('modal-overlay')} onClick={close} />
        <span role="button" className={cx('modal-close')} aria-label="close" onClick={close}>
          x
        </span>
        <div className={cx('modal-body')}>{children}</div>
      </div>
    ) : null,
    modalRoot,
  );
});

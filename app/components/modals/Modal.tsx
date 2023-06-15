'use client';

import React from 'react';
import { IPropsModal } from './IProps.interface';
import { IoMdClose } from 'react-icons/io';
import Button from '../button/Button';
import styles from './index.module.scss';

const Modal: React.FC<IPropsModal> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = React.useState(isOpen);

  React.useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = React.useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = React.useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = React.useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.modalContainerWrapper}>
          {/* Content */}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className={styles.modalContainerWrapperContent}>
              {/* Header */}
              <div className={styles.modalContainerHeader}>
                <button onClick={handleClose} className={styles.modalContainerHeaderBtn}>
                  <IoMdClose size={18} />
                </button>
                <div className={styles.modalContainerHeaderTitle}>{title}</div>
              </div>
              {/* Body */}
              <div className={styles.modalContainerBody}>{body}</div>
              {/* Footer */}
              <div className={styles.modalContainerFooter}>
                <div className={styles.modalContainerFooterBtnContainer}>
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

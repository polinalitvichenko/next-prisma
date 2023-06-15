'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../../avatar/Avatar';
import React from 'react';
import MenuItem from '../menuitem/MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import styles from './index.module.scss';

const UserMenu: React.FC = (): JSX.Element => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = React.useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={styles.userMenuContainer}>
      <div className={styles.userMenuContainerWrapper}>
        <div className={styles.userMenuContainerWrapperHomePage}>Airbnb your home</div>
        <div onClick={toggleOpen} className={styles.userMenuContainerOutlineMenu}>
          <AiOutlineMenu />
          <div className={styles.userMenuContainerAvatar}>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.outlineMenuContainer}>
          <div className={styles.outlineMenuContainerWrapper}>
            <MenuItem label="Login" onClick={registerModal.onOpen} />
            <MenuItem label="Sign Up" onClick={registerModal.onOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

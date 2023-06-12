'use client';
import styles from './index.module.scss'
import Logo from './logo/Logo';
import Search from './search/Search';
import UserMenu from './usermenu/UserMenu';

const NavBar: React.FC = (): JSX.Element => {
return (
 
  <div className={styles.navBarContainer}>
  <div className={styles.navBarContainerWrapper}>
    {/* <Container> */}
      <div className={styles.navBarContainerWrapperItems}>
        <Logo />
        <Search />
        <UserMenu />
      </div>
    {/* </Container> */}
  </div>
</div>
)}


export default NavBar
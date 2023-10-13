import Logo from '../Logo/Logo';
import NavButtons from './NavButtons/NavButtons';
import styles from './Navbar.module.scss';

const Navbar = () => {

    return (
        <header className={styles.header}>
            <Logo />
            <NavButtons />
        </header>
    );
};

export default Navbar;
import { useState } from 'react';
import styles from './NavbarMobile.module.scss';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import CopyRights from '../CopyRights/CopyRights';

const NavbarMobile = () => {
    const [openNavbar, setOpenNavbar] = useState('hidden');
    const [closed, setClosed] = useState(false);

    const handleCloseNavbarMobile = () => {
        closed === false ? (setClosed(true), setOpenNavbar('exposed')) : (setOpenNavbar('hidden'), setClosed(false));

        console.log(`Clicou no menu de sanduíche! ${closed} - ${openNavbar}`)
    }

    return (
        <header className={`${styles['navbarMobile']} ${styles[openNavbar]}`}>

            <Logo />

            <input type='checkbox' id='sandwitchCheckbox' />

            <label htmlFor='sandwitchCheckbox' className={`${styles['sandwitch_' + openNavbar]}`} onClick={() => handleCloseNavbarMobile()}>
                <div className={`${styles['sandwitchItem']} ${styles['top']}`} />
                <div className={`${styles['sandwitchItem']} ${styles['mid']}`} />
                <div className={`${styles['sandwitchItem']} ${styles['bottom']}`} />
            </label>

            <nav className={`${styles['mobileNav']} ${styles[openNavbar]}`}>
                <ul className={styles.mobileNavItems}>
                    <li className={styles.mobileNavItem}><Link href='#' className={styles.mobileNavItemLink} onClick={() => handleCloseNavbarMobile()}>Sobre mim</Link></li>
                    <li className={styles.mobileNavItem}><Link href='#casamentos' className={styles.mobileNavItemLink}onClick={() => handleCloseNavbarMobile()}>Casamentos</Link></li>
                    <li className={styles.mobileNavItem}><Link href='#formaturas' className={styles.mobileNavItemLink}onClick={() => handleCloseNavbarMobile()}>Formaturas</Link></li>
                    <li className={styles.mobileNavItem}><Link href='#eventos' className={styles.mobileNavItemLink}onClick={() => handleCloseNavbarMobile()}>Eventos</Link></li>
                    <li className={styles.mobileNavItem}><Link href='#hireme' className={styles.mobileNavItemLink} onClick={() => handleCloseNavbarMobile()}>Contato</Link></li>
                </ul>

            <Logo />

            </nav>


        </header>
    );
};

export default NavbarMobile;
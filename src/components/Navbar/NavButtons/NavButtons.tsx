import Link from 'next/link';
import styles from './NavButtons.module.scss';
import NavOffers from './NavOffers/NavOffers';

const NavButtons = () => {

    return (
        <nav className={styles.navButtons}>
            <ul className={styles.navButtonsItems}>
                <li className={styles.navButtonsItemsLink}><Link className={styles.navButton} href='#'>Sobre mim</Link></li>
                <li className={`${styles['navButtonsItemsLink']} ${styles['navButtonsItemsMid']}`}><NavOffers /></li>
                <li className={styles.navButtonsItemsLink}><Link className={styles.navButton} href='#hireme'>Contato</Link></li>
            </ul>
        </nav>
    );
};

export default NavButtons;
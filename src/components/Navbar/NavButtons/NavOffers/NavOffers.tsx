import Link from 'next/link';
import styles from './NavOffers.module.scss';

const NavOffers = () => {

    return (
        <div className={styles.navOffers}>

            Serviços

            <ul className={styles.navOffersItems}>
                <li className={styles.navOffersItem}><Link href='#casamentos' className={styles.navOffersLink}>Casamentos</Link></li>
                <li className={styles.navOffersItem}><Link href='#formaturas' className={styles.navOffersLink}>Formaturas</Link></li>
                <li className={styles.navOffersItem}><Link href='#eventos' className={styles.navOffersLink}>Eventos</Link></li>
            </ul>
        </div>
    );
};

export default NavOffers;
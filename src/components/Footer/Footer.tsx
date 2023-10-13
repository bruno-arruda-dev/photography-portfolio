import CopyRights from "../CopyRights/CopyRights";
import HireMe from "../HireMe/HireMe";
import styles from './Footer.module.scss';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <HireMe />
            <CopyRights />
        </footer>
    );
};

export default Footer;
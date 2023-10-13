import MainBanner from '../MainBanner/MainBanner';
import Offerings from '../Offerings/Offerings';
import Testimonials from '../Testimonials/Testimonials';
import styles from './Main.module.scss';

const Main = () => {

    return (
        <main className={styles.main}>
            <MainBanner />
            <Offerings />
            <Testimonials />
        </main>
    );
};

export default Main;
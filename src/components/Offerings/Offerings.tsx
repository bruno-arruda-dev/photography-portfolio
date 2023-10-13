import Offer from './Offer/Offer';
import styles from './Offerings.module.scss';

const Offerings = () => {

    return (
        <section className={styles.offerings} id='offerings'>

            <Offer
                title='Casamentos'
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                img='/images/married.jpg'
                dataPosition='left'
                dataHigh='bottom'
                dataColor='rose'
                id='casamentos'
            />

            <Offer
                title='Formaturas'
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                img='/images/graduating.jpg'
                dataPosition='right'
                dataHigh='top'
                dataColor='blue'
                id='formaturas'
            />

            <Offer
                title='Eventos'
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                img='/images/conference.jpg'
                dataPosition='left'
                dataHigh='bottom'
                dataColor='yellow'
                id='eventos'
            />

        </section>
    );
};

export default Offerings;
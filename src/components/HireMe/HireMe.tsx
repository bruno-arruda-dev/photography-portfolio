import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';
import styles from './HireMe.module.scss';

const HireMe = () => {

    return (
        <section className={styles.hireMe} id='hireme'>

            <div className={styles.socialMedia}>
                <div className={styles.socialMediaContainer}>
                    <SocialMediaButtons
                        type='whatsapp'
                        variant='discreet'
                        link='https://web.whatsapp.com/'
                    />
                    <SocialMediaButtons
                        type='instagram'
                        variant='discreet'
                        link='https://www.instagram.com/'
                    />
                    <SocialMediaButtons
                        type='linkedin'
                        variant='discreet'
                        link='https://www.linkedin.com/'
                    />
                    <SocialMediaButtons
                        type='behance'
                        variant='discreet'
                        link='https://www.behance.net/'
                    />
                    <SocialMediaButtons
                        type='pinterest'
                        variant='discreet'
                        link='https://twitter.com/'
                    />
                </div>
                <a href='mailto:seuemail@seuemail.com'>seuemail@seuemail.com</a>
            </div>

            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012.2903564741949!2d-49.256328799921036!3d-16.681915265362512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1650c0f6f1b%3A0x2dfb2f1449e3f3ed!2sPal%C3%A1cio%20Pedro%20Ludovico%20Teixeira!5e0!3m2!1spt-BR!2sbr!4v1696457917736!5m2!1spt-BR!2sbr"
                    loading="lazy"
                ></iframe>
            </div>

        </section>
    );
};

export default HireMe;
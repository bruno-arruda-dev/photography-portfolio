import styles from './Testimonial.module.scss';

interface ITestimonialProps {
    name: string;
    testimonial: string;
    stars?: number;
}

const Testimonial = ({ name, testimonial, stars }: ITestimonialProps) => {

    return (
        <div className={styles.carrouselCard}>
            <div className={styles.dataContainer}>

                <h4>{name}</h4>

                <div className={styles.textContent}>
                    <div className={styles.openQuote} />
                    <p>{testimonial}</p>
                    <div className={styles.closeQuote} />
                </div>

                <div className={styles.stars}>
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
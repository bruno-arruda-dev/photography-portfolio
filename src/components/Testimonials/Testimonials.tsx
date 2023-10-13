import Testimonial from './Testimonial/Testimonial';
import styles from './Testimonials.module.scss';
import { Carousel } from 'react-bootstrap';

const Testimonials = () => {

    return (
        <section className={styles.carousel}>
            <Carousel className={styles.slide}>

                <Carousel.Item>
                    <Testimonial
                        name='Bruno Arruda'
                        testimonial='Excelente profissional!'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <Testimonial
                        name='Susanna Sarah'
                        testimonial='Trabalha muito bem!'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <Testimonial
                        name='Polly Silva Sauro'
                        testimonial='Superou a todas as expectativas'
                    />
                </Carousel.Item>

            </Carousel>
        </section>
    );
};

export default Testimonials;
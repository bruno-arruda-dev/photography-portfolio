import { useLayoutEffect, useRef } from 'react';
import styles from './Offer.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


interface IOffer {
    title: string;
    text: string;
    img: string;
    dataPosition: 'left' | 'center' | 'right';
    dataHigh: 'top' | 'bottom';
    dataColor: 'blue' | 'green' | 'rose' | 'yellow';
    id: string;
}

const Offer = ({ title, text, img, dataPosition, dataHigh, dataColor, id }: IOffer) => {
    const offerContainer = useRef(null);
    const dataOffer = useRef(null);

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(dataOffer.current, {
            opacity: 1,
            y: 0,
            x: 0,
            scrollTrigger: {
                trigger: offerContainer.current,
                // markers: true,
                start: 'top 20%',
                end: 'bottom bottom',
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf('.top')
            gsap.killTweensOf('.mid')
            gsap.killTweensOf('.bottom')
        }

    }, []);

    return (
        <section className={styles.offer}
            style={{ backgroundImage: `url('${img}')` }} id={id}
            ref={offerContainer}>

            <div ref={dataOffer}
                className={`${styles['dataContainer']} ${styles[dataPosition]} ${styles[dataHigh]} ${styles[dataColor]}`}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>

        </section>
    );
};

export default Offer;
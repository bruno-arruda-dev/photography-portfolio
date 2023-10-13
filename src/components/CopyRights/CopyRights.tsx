import styles from './CopyRights.module.scss';


const CopyRights = () => {

    return (
        <section className={styles.copyrights}>
            <p><a href='https://portfolio-bruno-kappa.vercel.app/' target='_blank'>Portfólio</a> | <a href='mailto:brunoarrm@gmail.com'>bruno.arrm@gmail.com</a> | © 2023 Bruno Arruda. Todos os direitos reservados.</p>
        </section>
    );
};

export default CopyRights;
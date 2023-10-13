import styles from './SocialMediaButtons.module.scss';

interface ISocialMediaButtonsProps {
    type: 'whatsapp' | 'instagram' | 'linkedin' | 'email' | 'behance' | 'pinterest' | 'facebook' | 'twitter';
    variant: 'colored' | 'discreet'
    text?: string;
    link: string;
}

const SocialMediaButtons = ({ type, variant, text, link }: ISocialMediaButtonsProps) => {
    return (
        <a
            href={link}
            className={`${styles['socialMediaButtons']}`}
            target='_blank'
        >
            <div className={`${styles['buttonLogo']} ${styles[type + '_' + variant]}`} />
            <p>{text}</p>
        </a>
    )
}

export default SocialMediaButtons;
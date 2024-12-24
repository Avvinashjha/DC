import styles from "./Footer.module.scss";
import {socialLinks} from "@/components/common/Footer/navlinks";
import IconInstagram from "@/components/icons/IconInstagram";
import IconX from "@/components/icons/IconX";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconYoutube from "@/components/icons/IconYoutube";
const Footer = () => {
    return <footer className={styles.footer__container}>
        <div className={styles.footer__left}>
        </div>
        <div className={styles.footer__center}></div>
        <div className={styles.footer__right}>

        </div>
        <div className={styles.social__links}>
            <a href={socialLinks[0].link} target={"_blank"} className={styles.social__link}>
                <IconInstagram/>
            </a>
            <a href={socialLinks[1].link} target={"_blank"} className={styles.social__link}>
                <IconX/>
            </a>
            <a href={socialLinks[2].link} target={"_blank"} className={styles.social__link}>
                <IconLinkedin/>
            </a>
            <a href={socialLinks[3].link} target={"_blank"} className={styles.social__link}>
                <IconYoutube/>
            </a>
        </div>
        <div className={styles.footer__bottom}>
            <p> &copy; {new Date().getFullYear()} DailyCoder. All rights reserved.</p>
        </div>

    </footer>
}

export default Footer;
'use client'; // This is a client component (for handling interactivity)
import styles from './Header.module.scss'; // Scoped CSS styles
import logo from "../../../../public/logo/apple-touch-icon.png"
import Image from "next/image";
import Link from "next/link";
import {navlinks} from "@/components/common/Header/navlink";
import IconMenu from "@/components/icons/IconMenu";
import Avatar from "@/components/core/Avatar/Avatar";
import {useRef, useState} from "react";
import Drawer from "@/components/core/Drower/Drawer";
import IconCross from "@/components/icons/IconCross";
export default function Header() {
     const [isMenuOpen, setIsMenuOpen] =useState(false);
     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const triggerRef = useRef(null);
    return (
        <>
            <header className={`${styles.header} ${styles.big__screen__header}`}>
                <div className={styles.logo__container}>
                    <Link href={"/"}>
                        <Image className={styles.logo} src={logo} alt={"DC-ICON"}/>
                        <span className={styles.title}>DailyCoder</span>
                    </Link>
                </div>
                <nav className={`${styles.nav}`}>
                    {navlinks.map(link => {
                        return (
                            <span className={styles.link} key={link.title}>
                                <Link href={link.base}>
                                    {link.title}
                                </Link>
                            </span>
                        )
                    })}
                </nav>
                <Avatar>
                    <Image src={logo} alt={"img"}/>
                </Avatar>
            </header>
            <header className={`${styles.header} ${styles.header__min} ${styles.small__screen__header}`}>
                <div >
                    <IconMenu className={styles.menu__icon} ref={triggerRef}  onClick={toggleMenu}/>
                    <Drawer isOpen={isMenuOpen} onClose={toggleMenu} position="left" backdrop={true}>
                        <div className={styles.drawer__header}>
                            <h2 className={styles.title}>DailyCoder</h2>
                            <IconCross className={styles.icon} onClick={toggleMenu}/>
                        </div>
                        <div>
                            <nav className={`${styles.nav__min}`}>
                                {navlinks.map(link => {
                                    return (
                                        <Link className={styles.link} key={link.title} href={link.base}>
                                                {link.title}
                                        </Link>
                                    )
                                })}
                            </nav>
                        </div>

                    </Drawer>
                </div>
                <div className={styles.logo__container}>
                    <Link href={"/"}>
                        <Image className={styles.logo} src={logo} alt={"DC-ICON"}/>
                        <span className={styles.title}>DailyCoder</span>
                    </Link>
                </div>
                <Avatar>
                    <Image src={logo} alt={"img"}/>
                </Avatar>
            </header>
        </>
    );
}
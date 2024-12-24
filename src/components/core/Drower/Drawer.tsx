'use client'; // Ensures this component is client-side for interactivity
import { ReactNode, useEffect, useRef } from 'react';
import styles from './Drawer.module.scss';

interface DrawerProps {
    isOpen: boolean; // Controls whether the drawer is open
    onClose: () => void; // Function to close the drawer
    children: ReactNode; // Content to render inside the drawer
    position?: 'left' | 'right' | 'top' | 'bottom'; // Position of the drawer (default is left)
    backdrop?: boolean; // Whether to show a backdrop (default is true)
}

export default function Drawer({
                                   isOpen,
                                   onClose,
                                   children,
                                   position = 'left',
                                   backdrop = true,
                               }: DrawerProps) {
    const drawerRef = useRef<HTMLDivElement | null>(null);

    // Close the drawer when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen && backdrop) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOpen, onClose, backdrop]);

    // Render nothing if the drawer is closed
    if (!isOpen) return null;

    return (
        <div className={styles.drawerContainer}>
            {backdrop && <div className={styles.backdrop} onClick={onClose} />}
            <div ref={drawerRef} className={`${styles.drawer} ${styles[position]}`} role="dialog" aria-hidden={!isOpen}>
                {children}
            </div>
        </div>
    );
}
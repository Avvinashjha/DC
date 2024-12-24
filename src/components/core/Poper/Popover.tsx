import { ReactNode, RefObject, useEffect, useRef } from 'react';
import styles from './Popover.module.scss';

interface PopoverProps {
    children: ReactNode; // Content inside the popover
    isOpen: boolean; // Determines whether the popover is actively shown
    onClose: () => void; // Function to close the popover
    position?: 'top' | 'right' | 'bottom' | 'left'; // Position of the popover ('bottom' by default)
    triggerRef: RefObject<HTMLDivElement | null>; // Reference to the trigger element
}

export default function Popover({
                                    children,
                                    isOpen,
                                    onClose,
                                    triggerRef,
                                }: PopoverProps) {
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as Node;

            // Close popover on outside click
            if (
                popoverRef.current &&
                !popoverRef.current.contains(target) &&
                triggerRef.current &&
                !triggerRef.current.contains(target)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOpen, onClose, triggerRef]);

    if (!isOpen) {
        return null;
    }

    return (
        <div ref={popoverRef} className={`${styles.popover}`}>
            {children}
        </div>
    );
}
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface BlurRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export function BlurReveal({ children, delay = 0, duration = 0.8, className = "" }: BlurRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

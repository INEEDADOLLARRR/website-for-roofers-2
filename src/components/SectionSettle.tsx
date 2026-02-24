import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionSettleProps {
    children: ReactNode;
    className?: string;
}

export function SectionSettle({ children, className = "" }: SectionSettleProps) {
    return (
        <motion.div
            initial={{ scale: 0.98, opacity: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

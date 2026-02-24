import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef, ReactNode, ButtonHTMLAttributes } from 'react';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

export function MagneticButton({ children, className = "", ...props }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for the snap-back feeling
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();

        // Calculate distance from center
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Multiplier dictates how far it tracks the mouse. 40px max push roughly.
        const pushX = (clientX - centerX) * 0.4;
        const pushY = (clientY - centerY) * 0.4;

        x.set(pushX);
        y.set(pushY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`relative shimmer-slash cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-brand-black text-brand-white flex items-center justify-center">
            <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." />

            <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center max-w-md px-6"
            >
                <span className="font-display text-8xl md:text-9xl font-bold text-brand-white/5 block mb-4">404</span>
                <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">Page Not Found</h1>
                <p className="text-brand-silver font-light mb-10">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-white text-brand-black rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-brand-silver transition-colors duration-300"
                >
                    <Home className="w-4 h-4" /> Back to Home
                </Link>
            </motion.div>
        </div>
    );
}

import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const BREADCRUMB_NAMES: Record<string, string> = {
    '/': 'Home',
    '/blog': 'Blog',
};

export function Breadcrumbs() {
    const location = useLocation();

    if (location.pathname === '/') return null;

    const segments = location.pathname.split('/').filter(Boolean);
    const crumbs = [
        { label: 'Home', href: '/' },
        ...segments.map((segment, i) => ({
            label: BREADCRUMB_NAMES[`/${segments.slice(0, i + 1).join('/')}`] ||
                segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            href: `/${segments.slice(0, i + 1).join('/')}`,
        })),
    ];

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: crumb.label,
            item: `https://verrazanoroofing.com${crumb.href}`,
        })),
    };

    return (
        <>
            <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                aria-label="Breadcrumb"
                className="container mx-auto px-6 py-4"
            >
                <ol className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest">
                    {crumbs.map((crumb, i) => {
                        const isLast = i === crumbs.length - 1;
                        return (
                            <li key={crumb.href} className="flex items-center gap-2">
                                {i === 0 && <Home className="w-3 h-3 text-brand-silver/60" />}
                                {isLast ? (
                                    <span className="text-brand-white font-medium">{crumb.label}</span>
                                ) : (
                                    <>
                                        <Link
                                            to={crumb.href}
                                            className="text-brand-silver hover:text-brand-white transition-colors duration-300"
                                        >
                                            {crumb.label}
                                        </Link>
                                        <ChevronRight className="w-3 h-3 text-brand-silver/40" />
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </motion.nav>
        </>
    );
}

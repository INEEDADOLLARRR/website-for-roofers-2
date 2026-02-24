import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getAllArticles, getAllCategories, type Article } from '../lib/articleLoader';

const ARTICLES_PER_PAGE = 6;

function ArticleCard({ article, index }: { article: Article; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
            <Link
                to={`/blog/${article.slug}`}
                className="group block glass-panel-light rounded-2xl overflow-hidden hover:bg-brand-white/5 transition-all duration-500 h-full"
            >
                <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    <span className="absolute top-4 left-4 px-3 py-1 glass-panel rounded-full text-[10px] uppercase tracking-widest text-brand-white font-semibold backdrop-blur-md">
                        {article.category}
                    </span>
                </div>

                <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center gap-1.5 text-brand-silver text-[10px] uppercase tracking-widest">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>

                    <h2 className="font-display text-xl font-medium tracking-tight mb-4 group-hover:text-brand-white transition-colors duration-300 leading-snug">
                        {article.title}
                    </h2>

                    <p className="text-brand-silver/70 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                        {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[9px] uppercase tracking-widest text-brand-silver/50 px-2 py-0.5 rounded-full border border-brand-silver/10">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-brand-blue text-xs uppercase tracking-widest font-semibold group-hover:gap-3 transition-all duration-300">
                        Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}

export default function BlogIndex() {
    const allArticles = useMemo(() => getAllArticles(), []);
    const categories = useMemo(() => getAllCategories(), []);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    const filteredArticles = activeCategory
        ? allArticles.filter(a => a.category === activeCategory)
        : allArticles;

    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    const paginatedArticles = filteredArticles.slice(0, page * ARTICLES_PER_PAGE);

    return (
        <div className="min-h-screen bg-brand-black text-brand-white">
            <SEOHead
                title="Blog"
                description="Expert insights on commercial roofing systems, maintenance best practices, and cutting-edge restoration technologies from the Verrazano Roofing team."
                url="/blog"
            />

            <Breadcrumbs />

            <div className="container mx-auto px-6 max-w-6xl pb-32">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mb-20 pt-8"
                >
                    <p className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-brand-blue" />
                        Insights & Expertise
                    </p>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                        The Roofing <span className="text-brand-silver">Journal.</span>
                    </h1>
                    <p className="text-brand-silver font-light leading-relaxed">
                        In-depth analysis of roofing technologies, maintenance strategies, and industry advancements from our team of architectural roofing specialists.
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap gap-3 mb-16"
                >
                    <button
                        onClick={() => { setActiveCategory(null); setPage(1); }}
                        className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer ${!activeCategory ? 'bg-brand-white text-brand-black' : 'glass-panel text-brand-silver hover:text-brand-white hover:bg-brand-white/10'
                            }`}
                    >
                        All
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setPage(1); }}
                            className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer ${activeCategory === cat ? 'bg-brand-white text-brand-black' : 'glass-panel text-brand-silver hover:text-brand-white hover:bg-brand-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedArticles.map((article, i) => (
                        <ArticleCard key={article.slug} article={article} index={i} />
                    ))}
                </div>

                {/* Load More */}
                {page < totalPages && (
                    <div className="text-center mt-16">
                        <button
                            onClick={() => setPage(p => p + 1)}
                            className="px-8 py-3 glass-panel-light rounded-full text-xs uppercase tracking-widest font-semibold text-brand-silver hover:text-brand-white hover:bg-brand-white/10 transition-all duration-300 cursor-pointer"
                        >
                            Load More Articles
                        </button>
                    </div>
                )}

                {filteredArticles.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-brand-silver font-light">No articles found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllArticles } from '../lib/articleLoader';

export function LatestArticles() {
    const articles = getAllArticles().slice(0, 3);

    return (
        <section className="py-32 bg-brand-black text-brand-white border-t border-brand-silver/10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 flex items-center gap-4"
                        >
                            <span className="w-8 h-[1px] bg-brand-blue" />
                            Latest Insights
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-4xl md:text-5xl font-medium tracking-tight"
                        >
                            The Roofing <span className="text-brand-silver">Journal.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-brand-blue font-semibold uppercase tracking-widest text-[10px] md:text-xs hover:text-brand-white transition-colors duration-300 group"
                        >
                            View All Articles
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, i) => (
                        <motion.div
                            key={article.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-brand-blue text-[10px] uppercase tracking-widest font-semibold">{article.category}</span>
                                        <span className="text-brand-silver/40">·</span>
                                        <span className="flex items-center gap-1 text-brand-silver/60 text-[10px] uppercase tracking-widest">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-lg font-medium tracking-tight mb-3 group-hover:text-brand-white transition-colors leading-snug">
                                        {article.title}
                                    </h3>
                                    <p className="text-brand-silver/60 text-sm font-light leading-relaxed line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

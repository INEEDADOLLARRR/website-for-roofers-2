import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getArticleBySlug, getRelatedArticles } from '../lib/articleLoader';
import { marked } from 'marked';
import { useMemo } from 'react';

function TableOfContents({ content }: { content: string }) {
    const headings = useMemo(() => {
        const matches = content.match(/^#{2,3}\s.+$/gm) || [];
        return matches.map(h => {
            const level = h.startsWith('### ') ? 3 : 2;
            const text = h.replace(/^#{2,3}\s/, '');
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return { level, text, id };
        });
    }, [content]);

    if (headings.length === 0) return null;

    return (
        <nav aria-label="Table of Contents" className="glass-panel-light rounded-2xl p-6 mb-12">
            <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-brand-silver mb-4">
                In This Article
            </h2>
            <ul className="space-y-2">
                {headings.map((h, i) => (
                    <li key={i}>
                        <a
                            href={`#${h.id}`}
                            className={`block text-sm transition-colors duration-300 hover:text-brand-white ${h.level === 3 ? 'pl-4 text-brand-silver/60' : 'text-brand-silver font-medium'
                                }`}
                        >
                            {h.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default function ArticlePage() {
    const { slug } = useParams<{ slug: string }>();
    const article = slug ? getArticleBySlug(slug) : undefined;
    const relatedArticles = slug ? getRelatedArticles(slug) : [];

    if (!article) {
        return (
            <div className="min-h-screen bg-brand-black text-brand-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-display text-4xl font-medium mb-4">Article Not Found</h1>
                    <Link to="/blog" className="text-brand-blue hover:text-brand-white transition-colors">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const readTime = Math.ceil(article.content.split(/\s+/).length / 200);

    // Add IDs to headings in rendered HTML
    const renderedContent = useMemo(() => {
        const html = marked(article.content) as string;
        return html.replace(/<h([23])>(.*?)<\/h[23]>/g, (_, level, text) => {
            const id = text.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return `<h${level} id="${id}">${text}</h${level}>`;
        });
    }, [article.content]);

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: article.featuredImage,
        datePublished: article.date,
        dateModified: article.date,
        author: { '@type': 'Person', name: article.author },
        publisher: {
            '@type': 'Organization',
            name: 'Verrazano Roofing',
            logo: { '@type': 'ImageObject', url: 'https://verrazanoroofing.com/logo.png' },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://verrazanoroofing.com/blog/${article.slug}`,
        },
    };

    return (
        <div className="min-h-screen bg-brand-black text-brand-white">
            <SEOHead
                title={article.title}
                description={article.excerpt}
                image={article.featuredImage}
                url={`/blog/${article.slug}`}
                type="article"
                article={{
                    author: article.author,
                    publishedTime: article.date,
                    tags: article.tags,
                }}
                jsonLd={articleJsonLd}
            />

            <Breadcrumbs />

            <article className="container mx-auto px-6 max-w-4xl pb-32">
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-brand-silver hover:text-brand-white transition-colors duration-300 text-xs uppercase tracking-widest mb-12"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Articles
                    </Link>
                </motion.div>

                {/* Article Header */}
                <header className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="px-3 py-1 glass-panel-light rounded-full text-[10px] uppercase tracking-widest text-brand-blue font-semibold">
                                {article.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-brand-silver text-[10px] uppercase tracking-widest">
                                <Calendar className="w-3 h-3" />
                                {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1.5 text-brand-silver text-[10px] uppercase tracking-widest">
                                <Clock className="w-3 h-3" />
                                {readTime} min read
                            </span>
                        </div>

                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-balance leading-tight">
                            {article.title}
                        </h1>

                        <p className="text-brand-silver text-lg font-light leading-relaxed max-w-3xl">
                            {article.excerpt}
                        </p>
                    </motion.div>

                    {/* Author */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4 mt-8 pt-8 border-t border-brand-silver/10"
                    >
                        <div className="w-10 h-10 rounded-full bg-brand-white/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-brand-silver" />
                        </div>
                        <div>
                            <p className="text-brand-white text-sm font-medium">{article.author}</p>
                            <p className="text-brand-silver text-[10px] uppercase tracking-widest">Verrazano Roofing</p>
                        </div>
                    </motion.div>
                </header>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-16"
                >
                    <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-brand-black/10 mix-blend-multiply" />
                </motion.div>

                {/* Table of Contents */}
                <TableOfContents content={article.content} />

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="prose-article"
                    dangerouslySetInnerHTML={{ __html: renderedContent }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-brand-silver/10">
                    <Tag className="w-4 h-4 text-brand-silver" />
                    {article.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 glass-panel rounded-full text-[10px] uppercase tracking-widest text-brand-silver">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="mt-24" aria-label="Related articles">
                        <h2 className="font-display text-2xl font-medium tracking-tight mb-10">Further Reading</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedArticles.map(related => (
                                <Link
                                    key={related.slug}
                                    to={`/blog/${related.slug}`}
                                    className="group glass-panel-light rounded-2xl overflow-hidden hover:bg-brand-white/5 transition-colors duration-300"
                                >
                                    <div className="aspect-[16/9] overflow-hidden">
                                        <img
                                            src={related.featuredImage}
                                            alt={related.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-brand-blue text-[10px] uppercase tracking-widest font-semibold">{related.category}</span>
                                        <h3 className="font-display text-lg font-medium mt-2 group-hover:text-brand-white transition-colors">{related.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </div>
    );
}

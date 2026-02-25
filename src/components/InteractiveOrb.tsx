import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ORB_DATA = [
    { id: 0, title: "Liquid Elastomers", angle: 0, description: "Seamless, monolithic rapid-cure membranes engineered for ultimate weather resistance." },
    { id: 1, title: "Custom Fabrication", angle: 72, description: "In-house copper and zinc architectural standing seam fabrication." },
    { id: 2, title: "Thermal Modeling", angle: 144, description: "Infrared diagnostic mapping to isolate efficiency leaks instantly." },
    { id: 3, title: "Structural Engineering", angle: 216, description: "Comprehensive load-bearing analysis for heavy estate roofing." },
    { id: 4, title: "Generational Warranty", angle: 288, description: "Uncompromising 25-50 year full coverage for complete peace of mind." },
];

export function InteractiveOrb() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    const handleNodeActivate = (index: number) => {
        setActiveIndex(index);
        setRotation(360 - ORB_DATA[index].angle);
    };

    return (
        <section aria-label="Service capabilities" className="py-16 md:py-28 bg-brand-black text-brand-white relative overflow-hidden flex flex-col items-center justify-center">
            <div className="text-center mb-12 md:mb-24 z-10 max-w-xl px-5 md:px-6">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] uppercase mb-4 flex items-center justify-center gap-3"
                >
                    <span className="w-6 h-[1px] bg-brand-blue" />
                    Service Ecosystem
                    <span className="w-6 h-[1px] bg-brand-blue" />
                </motion.p>
                <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
                    Precision Ecosystem.
                </h2>
                <p className="text-brand-silver/50 font-light leading-relaxed text-sm">
                    Explore our comprehensive architectural services.
                </p>
            </div>

            {/* Mobile: vertical list instead of orb */}
            <div className="md:hidden w-full px-5 mb-6">
                <div className="grid grid-cols-1 gap-2">
                    {ORB_DATA.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${activeIndex === i ? 'bg-brand-white/[0.06] border border-brand-white/10' : 'border border-brand-white/[0.03]'}`}
                            aria-pressed={activeIndex === i}
                        >
                            <div>
                                <p className={`font-display text-sm font-medium transition-colors duration-300 ${activeIndex === i ? 'text-brand-white' : 'text-brand-silver/60'}`}>{item.title}</p>
                                {activeIndex === i && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="text-brand-silver/50 text-xs font-light mt-1.5 leading-relaxed"
                                    >
                                        {item.description}
                                    </motion.p>
                                )}
                            </div>
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ml-3 transition-colors duration-300 ${activeIndex === i ? 'bg-brand-white' : 'bg-brand-white/20'}`} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop: orb */}
            <div className="hidden md:flex relative w-[480px] h-[480px] items-center justify-center">
                <motion.div
                    className="absolute inset-0 rounded-full border border-brand-white/5"
                    animate={{ rotate: rotation }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                >
                    {ORB_DATA.map((item, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <div key={i} className="absolute inset-0 pointer-events-none" style={{ transform: `rotate(${item.angle}deg)` }}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                    <button
                                        onMouseEnter={() => handleNodeActivate(i)}
                                        onClick={() => handleNodeActivate(i)}
                                        aria-label={item.title}
                                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${isActive ? 'bg-brand-white scale-110' : 'bg-brand-black border border-brand-silver/20 hover:border-brand-white/50 hover:scale-105'}`}
                                    >
                                        <motion.div
                                            animate={{ rotate: -rotation - item.angle }}
                                            transition={{ type: "spring", stiffness: 40, damping: 20 }}
                                            className="w-full h-full flex items-center justify-center"
                                        >
                                            <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${isActive ? 'bg-brand-black' : 'bg-brand-white/60'}`} />
                                        </motion.div>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                <div className="absolute w-64 text-center z-10 pointer-events-none">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight mb-3 text-brand-white">
                                {ORB_DATA[activeIndex].title}
                            </h3>
                            <p className="text-sm text-brand-silver/50 font-light leading-relaxed">
                                {ORB_DATA[activeIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

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

    const handleNodeClick = (index: number) => {
        setActiveIndex(index);
        setRotation(360 - ORB_DATA[index].angle);
    };

    return (
        <section className="py-32 bg-brand-black text-brand-white relative overflow-hidden flex flex-col items-center min-h-[90vh] justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

            <div className="text-center mb-32 z-10 max-w-2xl px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 flex items-center justify-center gap-4"
                >
                    <span className="w-8 h-[1px] bg-brand-blue" />
                    Interactive Protocol
                    <span className="w-8 h-[1px] bg-brand-blue" />
                </motion.p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                    Precision Ecosystem.
                </h2>
                <p className="text-brand-silver font-light leading-relaxed">
                    Hover the orbital nodes to explore our comprehensive architectural services.
                </p>
            </div>

            <div className="relative w-[300px] h-[300px] md:w-[550px] md:h-[550px] flex items-center justify-center">
                {/* The Orbiting Ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-brand-white/10"
                    animate={{ rotate: rotation }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                >
                    {ORB_DATA.map((item, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <div
                                key={i}
                                className="absolute inset-0 pointer-events-none"
                                style={{ transform: `rotate(${item.angle}deg)` }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                    <button
                                        onMouseEnter={() => handleNodeClick(i)}
                                        onClick={() => handleNodeClick(i)}
                                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${isActive ? 'bg-brand-white scale-125 shadow-[0_0_40px_rgba(255,255,255,0.6)]' : 'bg-brand-black border border-brand-silver/30 hover:border-brand-white hover:scale-110'}`}
                                    >
                                        <motion.div
                                            animate={{ rotate: -rotation - item.angle }}
                                            transition={{ type: "spring", stiffness: 40, damping: 20 }}
                                            className="w-full h-full flex items-center justify-center"
                                        >
                                            <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-500 ${isActive ? 'bg-brand-black blur-[1px]' : 'bg-brand-white'}`} />
                                        </motion.div>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Center Content */}
                <div className="absolute w-64 md:w-80 text-center z-10 pointer-events-none">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4 text-brand-white">
                                {ORB_DATA[activeIndex].title}
                            </h3>
                            <p className="text-sm md:text-base text-brand-silver font-light leading-relaxed">
                                {ORB_DATA[activeIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

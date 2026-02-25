import { motion, useScroll, useTransform, useInView } from 'motion/react';
import type { Key } from 'react';
import { useRef, useState, useEffect } from 'react';

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Diagnostic & Vision",
        description: "We begin with an exhaustive structural analysis and aesthetic consultation. Every material limitation and architectural opportunity is mapped out before design begins.",
        image: "https://picsum.photos/seed/diagnostic/800/640"
    },
    {
        step: "02",
        title: "Engineering & Procurement",
        description: "Our engineers design a bespoke membrane and structural plan. Only the highest echelon of materials—from custom-milled zinc to liquid elastomers—are procured.",
        image: "https://picsum.photos/seed/engineering/800/640"
    },
    {
        step: "03",
        title: "Surgical Installation",
        description: "Execution is paramount. Our master craftsmen operate with surgical precision, ensuring weather-tight integrity without disrupting the estate's ongoing operations.",
        image: "https://picsum.photos/seed/installation/800/640"
    },
    {
        step: "04",
        title: "Generational Turnover",
        description: "Upon final inspection, the system is turned over with our uncompromising warranty. The roof is not just replaced; it is architecturally elevated for generations.",
        image: "https://picsum.photos/seed/turnover/800/640"
    }
];

function ProcessStep({ step, title, description, index, setActiveStep }: { step: string, title: string, description: string, index: number, setActiveStep: (i: number) => void, key?: Key }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (isInView) setActiveStep(index);
    }, [isInView, index, setActiveStep]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "center center", "end 20%"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, -10]);

    return (
        <motion.div ref={ref} style={{ opacity, y }} className="py-16 md:py-24 flex flex-col gap-4 transform-gpu will-change-transform">
            <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-brand-white" />
                <span className="font-display text-brand-silver/50 tracking-widest text-xs uppercase">Phase {step}</span>
            </div>
            <h3 className="font-display text-xl md:text-3xl lg:text-4xl font-medium tracking-tight text-brand-white">{title}</h3>
            <p className="text-brand-silver/50 leading-relaxed text-sm max-w-lg font-light">{description}</p>
        </motion.div>
    );
}

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section ref={containerRef} id="process" aria-label="Our process" className="relative bg-brand-black text-brand-white">
            {/* Desktop: 2-column sticky image */}
            <div className="container mx-auto px-5 md:px-6 hidden md:grid grid-cols-2 gap-16 items-start relative pb-32">
                <div className="col-span-1 pt-28 pb-[50vh]">
                    <div className="mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-3xl font-medium tracking-tight mb-4"
                        >
                            The Methodology.
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="w-8 h-[1px] bg-brand-silver/15 origin-left"
                        />
                    </div>
                    <div className="flex flex-col">
                        {PROCESS_STEPS.map((step, i) => (
                            <ProcessStep key={step.step} index={i} setActiveStep={setActiveStep} {...step} />
                        ))}
                    </div>
                </div>

                <div className="col-span-1 border-l border-brand-silver/5 sticky top-0 h-screen flex items-center justify-center pl-16">
                    <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-brand-white/[0.02] relative">
                        {PROCESS_STEPS.map((step, idx) => (
                            <div key={idx} className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: activeStep === idx ? 1 : 0 }}>
                                <img src={step.image} alt={step.title} width={800} height={640} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile: tabs + image */}
            <div className="container mx-auto px-5 md:hidden py-16">
                <h2 className="font-display text-2xl font-medium tracking-tight mb-3">The Methodology.</h2>
                <div className="w-8 h-[1px] bg-brand-silver/15 mb-8" />

                {/* Step tabs */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                    {PROCESS_STEPS.map((step, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveStep(i)}
                            className={`py-2 rounded-lg text-xs font-medium transition-all duration-300 ${activeStep === i ? 'bg-brand-white text-brand-black' : 'bg-brand-white/5 text-brand-silver/50'}`}
                        >
                            {step.step}
                        </button>
                    ))}
                </div>

                {/* Active image */}
                <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-8 relative">
                    {PROCESS_STEPS.map((step, idx) => (
                        <div key={idx} className="absolute inset-0 transition-opacity duration-500" style={{ opacity: activeStep === idx ? 1 : 0 }}>
                            <img src={step.image} alt={step.title} width={800} height={640} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

                {/* Active step content */}
                {PROCESS_STEPS.map((step, i) => (
                    activeStep === i && (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-3"
                        >
                            <div className="flex items-center gap-2.5">
                                <div className="w-1 h-1 rounded-full bg-brand-white" />
                                <span className="text-brand-silver/50 tracking-widest text-xs uppercase">Phase {step.step}</span>
                            </div>
                            <h3 className="font-display text-xl font-medium tracking-tight text-brand-white">{step.title}</h3>
                            <p className="text-brand-silver/50 leading-relaxed text-sm font-light">{step.description}</p>
                        </motion.div>
                    )
                ))}
            </div>
        </section>
    );
}

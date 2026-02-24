import { motion, useScroll, useTransform, useInView } from 'motion/react';
import type { Key } from 'react';
import { useRef, useState, useEffect } from 'react';

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Diagnostic & Vision",
        description: "We begin with an exhaustive structural analysis and aesthetic consultation. Every material limitation and architectural opportunity is mapped out before design begins.",
        image: "https://picsum.photos/seed/diagnostic/1000/800"
    },
    {
        step: "02",
        title: "Engineering & Procurement",
        description: "Our engineers design a bespoke membrane and structural plan. Only the highest echelon of materials—from custom-milled zinc to liquid elastomers—are procured.",
        image: "https://picsum.photos/seed/engineering/1000/800"
    },
    {
        step: "03",
        title: "Surgical Installation",
        description: "Execution is paramount. Our master craftsmen operate with surgical precision, ensuring weather-tight integrity without disrupting the estate's ongoing operations.",
        image: "https://picsum.photos/seed/installation/1000/800"
    },
    {
        step: "04",
        title: "Generational Turnover",
        description: "Upon final inspection, the system is turned over with our uncompromising warranty. The roof is not just replaced; it is architecturally elevated for generations.",
        image: "https://picsum.photos/seed/turnover/1000/800"
    }
];

// Individual Scrubbing Step
function ProcessStep({ step, title, description, index, setActiveStep }: { step: string, title: string, description: string, index: number, setActiveStep: (i: number) => void, key?: Key }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveStep(index);
        }
    }, [isInView, index, setActiveStep]);

    // Rule 7: Scroll Scrubbing
    // The animation maps from [start entering screen, centered, start leaving screen]
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "center center", "end 20%"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.98, 1, 1, 0.98]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [15, 0, 0, -15]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale, y }}
            className="py-32 flex flex-col gap-6 transform-gpu"
        >
            <div className="flex items-center gap-4">
                {/* Rule 13: Pulse Dot Indicator on the active step */}
                <motion.div
                    style={{ opacity }}
                    className="relative w-2 h-2"
                >
                    <div className="absolute inset-0 rounded-full bg-brand-white pulse-dot-ring" />
                    <div className="relative w-full h-full rounded-full bg-brand-white" />
                </motion.div>
                <span className="font-display font-medium text-brand-silver tracking-widest text-xs uppercase">Phase {step}</span>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-brand-white text-balance">{title}</h3>
            <p className="text-brand-silver/80 leading-relaxed text-base md:text-lg max-w-xl font-light">
                {description}
            </p>
        </motion.div>
    );
}

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    // Parallax for the sticky background video wrapper
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="relative bg-brand-black text-brand-white">
            <div className="container mx-auto px-6 hidden md:grid grid-cols-2 gap-20 items-start relative pb-32">

                {/* Left Col: Scrolling Steps */}
                <div className="col-span-1 pt-32 pb-[50vh]">
                    <div className="mb-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6"
                        >
                            The Methodology.
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="w-12 h-[1px] bg-brand-silver/30 origin-left"
                        />
                    </div>

                    <div className="flex flex-col">
                        {PROCESS_STEPS.map((step, i) => (
                            <ProcessStep key={step.step} index={i} setActiveStep={setActiveStep} {...step} />
                        ))}
                    </div>
                </div>

                {/* Right Col: Sticky Video Panel */}
                <div className="col-span-1 border-l border-brand-silver/10 sticky top-0 h-screen flex items-center justify-center pl-20">
                    <div className="w-full aspect-[4/5] object-cover rounded-2xl overflow-hidden bg-brand-white/5 border border-brand-white/5 relative glass-panel-hover">
                        <motion.div style={{ y: videoY }} className="absolute inset-[-10%] w-[120%] h-[120%] z-0">
                            {PROCESS_STEPS.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                                    style={{ opacity: activeStep === idx ? 1 : 0 }}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-[filter] duration-[2000ms] ease-in-out"
                                        style={{ backgroundImage: `url(${step.image})` }}
                                    />
                                </div>
                            ))}
                        </motion.div>
                        <div className="absolute inset-0 bg-brand-black/20 pointer-events-none z-10 mix-blend-multiply" />
                    </div>
                </div>
            </div>

            {/* Mobile exact same sequence but without sticky side-by-side */}
            <div className="container mx-auto px-6 md:hidden py-32">
                <h2 className="font-display text-4xl font-medium tracking-tight mb-6">The Methodology.</h2>
                <div className="w-12 h-[1px] bg-brand-silver/30 mb-16" />

                {/* Simple active image for mobile */}
                <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl mb-16 relative">
                    {PROCESS_STEPS.map((step, idx) => (
                        <div
                            key={idx}
                            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                            style={{ opacity: activeStep === idx ? 1 : 0 }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-[filter] duration-[2000ms] ease-in-out"
                                style={{ backgroundImage: `url(${step.image})` }}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col">
                    {PROCESS_STEPS.map((step, i) => (
                        <ProcessStep
                            key={step.step}
                            step={step.step}
                            title={step.title}
                            description={step.description}
                            index={i}
                            setActiveStep={setActiveStep}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

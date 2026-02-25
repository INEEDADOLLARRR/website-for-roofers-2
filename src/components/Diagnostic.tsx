import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight } from 'lucide-react';

export function Diagnostic() {
  const [sqft, setSqft] = useState(5000);
  const [calculated, setCalculated] = useState(false);

  const tearOffCost = sqft * 9;
  const coatingCost = sqft * 4.5;
  const savings = tearOffCost - coatingCost;

  return (
    <section aria-label="ROI Calculator" className="py-14 md:py-24 bg-brand-black text-brand-white relative overflow-hidden border-t border-brand-silver/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-semibold tracking-widest text-brand-silver/60 uppercase mb-7">
              <Calculator className="w-3.5 h-3.5" aria-hidden="true" /> ROI Calculator
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-7 leading-[1.1]">
              Calculate Your <br />Premium Savings
            </h2>
            <p className="text-brand-silver/50 mb-8 font-light leading-relaxed text-sm">
              Don't commit to a costly tear-off before knowing your options. Use our interactive tool to see how much you could save with our architecturally superior liquid roof coating.
            </p>

            <ul className="space-y-4 text-brand-silver/60 text-sm" role="list">
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-brand-white/50" /> Fully tax-deductible in year one
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-brand-white/50" /> Lower energy bills (highly reflective)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-brand-white/50" /> Backed by uncompromising warranties
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-6 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="relative mb-8">
              <label htmlFor="sqft-range" className="block text-sm font-semibold tracking-wider text-brand-silver/50 uppercase mb-5 flex justify-between items-end">
                Estimated Roof Size
                <span className="text-white font-display text-xl font-light">{sqft.toLocaleString()} <span className="text-sm text-brand-silver/40">Sq Ft</span></span>
              </label>
              <input
                id="sqft-range"
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={sqft}
                onChange={(e) => {
                  setSqft(Number(e.target.value));
                  setCalculated(false);
                }}
                className="w-full h-1 bg-brand-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                aria-valuemin={1000}
                aria-valuemax={50000}
                aria-valuenow={sqft}
                aria-label="Roof size in square feet"
              />
              <div className="flex justify-between text-xs text-brand-silver/30 mt-3 font-display tracking-widest">
                <span>1K</span>
                <span>50K+</span>
              </div>
            </div>

            {!calculated ? (
              <button
                onClick={() => setCalculated(true)}
                className="relative w-full py-4 bg-white text-brand-black rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-sm"
              >
                Reveal Projection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            ) : (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                <div className="p-6 bg-brand-black/40 rounded-xl border border-brand-white/5">
                  <div className="text-xs font-semibold tracking-widest text-brand-silver/40 uppercase mb-2">Estimated Savings</div>
                  <div className="text-4xl font-light text-white font-display tracking-tight">
                    <span className="text-2xl text-brand-silver/40">$</span>{savings.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-brand-white/[0.02] rounded-xl border border-brand-white/5">
                    <div className="text-[10px] font-semibold tracking-widest text-brand-silver/40 uppercase mb-1">Tear-off Route</div>
                    <div className="text-lg text-brand-silver/70 font-display">${tearOffCost.toLocaleString()}</div>
                  </div>
                  <div className="p-4 glass-panel rounded-xl">
                    <div className="text-[10px] font-semibold tracking-widest text-brand-silver/60 uppercase mb-1">Liquid System</div>
                    <div className="text-lg text-white font-display">${coatingCost.toLocaleString()}</div>
                  </div>
                </div>

                <button className="w-full py-4 bg-transparent border border-brand-white/10 text-white hover:bg-white hover:text-brand-black rounded-xl font-semibold transition-all duration-300 tracking-wider uppercase text-xs cursor-pointer">
                  Request Full Diagnostic
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

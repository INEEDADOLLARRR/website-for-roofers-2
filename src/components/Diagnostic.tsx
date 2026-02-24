import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight } from 'lucide-react';

export function Diagnostic() {
  const [sqft, setSqft] = useState(5000);
  const [calculated, setCalculated] = useState(false);

  const tearOffCost = sqft * 9; // Approx $9/sqft
  const coatingCost = sqft * 4.5; // Approx $4.5/sqft
  const savings = tearOffCost - coatingCost;

  return (
    <section className="py-24 bg-[#050505] text-slate-100 relative overflow-hidden border-t border-white/[0.04]">
      {/* Background abstract shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-semibold tracking-widest text-slate-300 uppercase mb-8">
              <Calculator className="w-4 h-4" /> ROI Calculator
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-glow">
              Calculate Your <br />Premium Savings
            </h2>
            <p className="text-xl text-slate-400 mb-10 font-light leading-relaxed">
              Don't commit to a costly tear-off before knowing your options. Use our interactive tool to see how much you could save with our architecturally superior liquid roof coating.
            </p>

            <ul className="space-y-5 text-slate-300">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" /> Fully tax-deductible in year one
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" /> Lower energy bills (highly reflective)
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" /> Backed by uncompromising warranties
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative mb-10">
              <label className="block text-sm font-semibold tracking-wider text-slate-400 uppercase mb-6 flex justify-between items-end">
                Estimated Roof Size
                <span className="text-white font-mono text-2xl font-light">{sqft.toLocaleString()} <span className="text-sm text-slate-500">Sq Ft</span></span>
              </label>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={sqft}
                onChange={(e) => {
                  setSqft(Number(e.target.value));
                  setCalculated(false);
                }}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white hover:accent-slate-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-4 font-mono font-medium tracking-widest">
                <span>1K</span>
                <span>50K+</span>
              </div>
            </div>

            {!calculated ? (
              <button
                onClick={() => setCalculated(true)}
                className="relative w-full py-5 bg-white text-[#050505] rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                Reveal Projection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="space-y-6 relative"
              >
                <div className="p-8 bg-black/40 rounded-2xl border border-white/5 backdrop-blur-sm">
                  <div className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-2">Estimated Savings</div>
                  <div className="text-5xl font-light text-white font-mono tracking-tight flex items-baseline gap-1">
                    <span className="text-3xl text-slate-500">$</span>
                    {savings.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-white/[0.02] rounded-xl border border-white/5">
                    <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">Tear-off Route</div>
                    <div className="text-xl text-slate-300 font-mono tracking-tight">${tearOffCost.toLocaleString()}</div>
                  </div>
                  <div className="p-5 glass-panel rounded-xl">
                    <div className="text-xs font-semibold tracking-widest text-slate-300 uppercase mb-2">Liquid System</div>
                    <div className="text-xl text-white font-mono tracking-tight flex items-center gap-2">
                      ${coatingCost.toLocaleString()}
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#050505] rounded-xl font-bold transition-all duration-300 mt-4 tracking-wide uppercase text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
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

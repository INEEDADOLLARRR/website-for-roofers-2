import { ShieldCheck, Award, ThumbsUp, Star, CheckCircle, Building2 } from 'lucide-react';

const logos = [
  { icon: Star, name: "Google 5-Star" },
  { icon: ThumbsUp, name: "Yelp Verified" },
  { icon: ShieldCheck, name: "BBB Accredited" },
  { icon: Award, name: "HomeAdvisor Pro" },
  { icon: CheckCircle, name: "Trustpilot" },
  { icon: Building2, name: "Angie's List" },
];

export function TrustTicker() {
  return (
    <div className="py-10 bg-brand-black border-y border-brand-silver/10 overflow-hidden flex relative">
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-brand-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-brand-black to-transparent z-10" />

      <div className="animate-marquee flex gap-24 items-center px-8 group">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-3 text-brand-silver opacity-50 group-hover:opacity-20 hover:!opacity-100 hover:!text-brand-white transition-all duration-300 cursor-default">
            <logo.icon className="w-5 h-5 transition-colors duration-300 group-hover:text-current hover:!text-brand-yellow" />
            <span className="font-display tracking-[0.05em] uppercase text-sm font-semibold">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

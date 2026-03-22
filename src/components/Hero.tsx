import { ArrowRight, Trophy } from "lucide-react";

export default function Hero({ content }: any) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#050507]"> 
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full -ml-20 -mb-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
            <Trophy className="w-3 h-3" /> Especialistas em ROI
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-white">
            {content.title.split('mercado')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">mercado</span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            {content.subtitle}
          </p>
          
          <a 
            href="#contact" 
            className="px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black rounded-2xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-3 group inline-flex"
          >
            {content.ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>  
        </div>

        <div className="relative animate-float">
           <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 blur-2xl rounded-3xl"></div>
           <div className="relative bg-slate-900/80 border border-white/10 p-2 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
              <div className="bg-[#050507] rounded-[2rem] p-8">
                 <div className="flex justify-between items-center mb-10">
                    <div className="space-y-2">
                       <div className="h-2 w-20 bg-slate-800 rounded-full"></div>
                       <div className="h-2 w-32 bg-slate-800 rounded-full"></div>
                    </div>
                    <div className="h-10 w-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                       <div className="h-4 w-4 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                 </div>
                 <div className="h-48 flex items-end gap-3 mb-6">
                    {[30, 60, 45, 85, 55, 95, 75].map((h, i) => (
                       <div key={i} style={{height: `${h}%`}} className="flex-1 bg-gradient-to-t from-amber-500/40 to-amber-400/10 rounded-t-lg"></div>
                    ))}
                 </div>
                 <div className="grid grid-cols-3 gap-4">
                    <div className="h-4 bg-slate-800 rounded-full"></div>
                    <div className="h-4 bg-slate-800 rounded-full col-span-2"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
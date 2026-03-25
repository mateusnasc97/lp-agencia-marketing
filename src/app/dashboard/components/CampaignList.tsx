import { topCampaigns } from "@/data/dashboardData";
import { ExternalLink, Instagram, Search, Linkedin } from "lucide-react";

export default function CampaignList() {
  return (
    <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-[2.5rem] p-8 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold text-white tracking-tight">Top Campanhas Ativas</h3>
        <button className="text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-widest">Ver Todas</button>
      </div>

      <div className="space-y-4">
        {topCampaigns.map((camp) => (
          <div key={camp.id} className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 hover:bg-white/[0.04] transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${camp.platform.includes("Meta") ? "bg-blue-500/10 text-blue-400" : "bg-red-500/10 text-red-400"}`}>
                {camp.platform.includes("Meta") ? <Instagram size={20} /> : camp.platform.includes("Google") ? <Search size={20} /> : <Linkedin size={20} />}
              </div>
              <div>
                <h4 className="font-bold text-slate-100 group-hover:text-amber-500 transition-colors">{camp.name}</h4>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-tighter">{camp.platform}</p>
              </div>
            </div>

            <div className="flex items-center gap-12 text-right">
              <div className="hidden md:block">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Investido</p>
                <p className="font-bold text-slate-200">{camp.spend}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-widest">ROI</p>
                <p className="font-black text-amber-500 text-lg">{camp.roi}</p>
              </div>
              <div className={`w-2 h-2 rounded-full shadow-[0_0_10px] ${camp.status === "Ativa" ? "bg-emerald-500 shadow-emerald-500/50" : "bg-slate-700 shadow-transparent"}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import MainChart from "./components/MainChart";
import CampaignList from "./components/CampaignList";

export default function DashboardPage() {
  const stats = [
    { label: "Investimento Total", value: "R$ 12.450,00", grow: "+12%" },
    { label: "Retorno (ROAS)", value: "4.8x", grow: "+5%" },
    { label: "Leads Gerados", value: "842", grow: "+18%" },
    { label: "Custo por Lead", value: "R$ 14,78", grow: "-2%" },
  ];

  return (
    <div className="space-y-10">
      <div className="pl-12 lg:pl-0"> 
        <h1 className="text-2xl md:text-3xl font-bold leading-tight">
          Visão Geral de Performance
        </h1>
        <p className="text-slate-400 text-sm md:text-base italic">
          Acompanhe seus resultados em tempo real.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
        <div key={stat.label} className="group p-6 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:border-amber-500/30 transition-all duration-500 shadow-2xl">
        <p className="text-sm text-slate-500 font-medium group-hover:text-amber-500/70 transition-colors uppercase tracking-widest">{stat.label}</p>
        <div className="flex items-end justify-between mt-4">
        <h3 className="text-3xl font-black text-white tracking-tighter">{stat.value}</h3>
        <span className={`text-[10px] font-bold px-3 py-1   rounded-full border ${stat.grow.startsWith('+') ? 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5' : 'border-red-500/20 text-red-400 bg-red-500/5'}`}>
        {stat.grow}
        </span>
    </div>
    </div>
        ))}
      </div>

      <div className="mt-8 w-full overflow-hidden">
        <MainChart />
        <CampaignList />
      </div>
    </div>
  );
}
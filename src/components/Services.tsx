import * as Icons from "lucide-react";

export default function Services({ service }: any) {
  // @ts-ignore
  const Icon = Icons[service.iconName] || Icons.Rocket;

  return (
    <div className="group p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-indigo-500/50 transition-all duration-300">
      <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
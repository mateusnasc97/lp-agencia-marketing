import { Instagram, Globe, MessageCircle, Send, Linkedin } from "lucide-react";
import Link from "next/link";

export default function BioLinks() {
  const links = [
    { name: "Consultoria Estratégica", icon: MessageCircle, href: "#", highlight: true },
    { name: "Nosso Portfólio", icon: Globe, href: "/" },
    { name: "Resultados de Clientes", icon: Send, href: "/dashboard" },
    { name: "Siga no Instagram", icon: Instagram, href: "#" },
    { name: "Conexão Profissional", icon: Linkedin, href: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#020203] flex flex-col items-center px-6 py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="w-24 h-24 p-1 rounded-full bg-gradient-to-tr from-amber-500 to-emerald-500 mb-4 shadow-2xl shadow-amber-500/20">
        <Link href="/">
          <div className="w-full h-full bg-[#050507] rounded-full flex items-center justify-center font-black text-3xl text-white">F</div>
        </Link>
        </div>
        <h1 className="text-2xl font-black text-white tracking-tighter">Focus.</h1>
        <p className="text-slate-400 text-sm font-medium mt-1">Estrategistas em Performance Digital</p>
      </div>

      {/* Links Container */}
      <div className="w-full max-w-md space-y-4 z-10">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`flex items-center justify-between p-5 rounded-3xl border transition-all duration-300 group
              ${link.highlight 
                ? "bg-amber-500 border-amber-400 text-black font-black animate-pulse hover:scale-105" 
                : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10 hover:border-amber-500/30"
              }`}
          >
            <div className="flex items-center gap-4">
              <link.icon size={20} className={link.highlight ? "text-black" : "text-amber-500"} />
              <span className="text-sm uppercase tracking-widest">{link.name}</span>
            </div>
            <div className={`w-2 h-2 rounded-full ${link.highlight ? "bg-black" : "bg-white/20 group-hover:bg-amber-500"}`}></div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-auto pt-10 text-[10px] text-slate-600 uppercase tracking-[0.3em] font-bold">
        Powered by Focus Tech
      </p>
    </div>
  );
}
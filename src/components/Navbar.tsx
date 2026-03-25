import { data } from "@/data/data";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#050508]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 min-h-[5rem] py-4 md:py-0 md:h-20 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo - Centralizado no Mobile, Esquerda no Desktop */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">F</div>
          <span className="text-xl font-bold tracking-tight text-white italic">Focus<span className="text-indigo-500">.</span></span>
        </div>

        {/* Grupo de Links e Botões */}
        <div className="flex items-center gap-3 md:gap-8">
          
          {/* Área do Cliente */}
          <Link 
            href="/dashboard" 
            className="px-4 py-2 md:px-6 md:py-2 border border-white/10 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all shadow-xl shadow-amber-500/5"
          >
            Dashboard
          </Link>

          {/* Links Internos */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Serviços</a>
            <a href="#about" className="hover:text-white transition-colors">Método</a>
          </div>

          {/* Botão de Conversão Principal */}
          <a 
            href={`https://wa.me/${data.Contact.whatsapp}`} 
            className="px-4 py-2 md:px-5 md:py-2.5 bg-indigo-600 text-white md:bg-indigo-600/10 md:border md:border-indigo-500/20 md:text-indigo-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-xs md:text-sm font-bold shadow-lg shadow-indigo-600/20 text-center"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </nav>
  );
}
import { data } from "@/data/data";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#050508]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">F</div>
          <span className="text-xl font-bold tracking-tight text-white">Focus<span className="text-indigo-500">.</span></span>
        </div>

        <Link 
        href="/dashboard" 
        className="hidden md:block px-6 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all"
      >
        Área do Cliente
      </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-white transition-colors">Serviços</a>
          <a href="#about" className="hover:text-white transition-colors">Método</a>
          <a href={`https://wa.me/${data.Contact.whatsapp}`} className="px-5 py-2.5 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
            Falar com Especialista
          </a>
        </div>
      </div>
    </nav>
  );
}
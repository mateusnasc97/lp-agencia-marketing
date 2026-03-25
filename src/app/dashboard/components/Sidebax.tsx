"use client"; 

import { useState } from "react";
import { LayoutDashboard, TrendingUp, Users, Settings, LogOut, X, Menu } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Visão Geral", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Performance", icon: TrendingUp, href: "/dashboard/performance" },
    { name: "Clientes", icon: Users, href: "/dashboard/clients" },
    { name: "Configurações", icon: Settings, href: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Botão Hamburguer (Só aparece no Mobile) */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-amber-500 rounded-2xl text-black shadow-lg shadow-amber-500/20"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside className={`
        w-64 border-r border-white/5 bg-[#050507]/95 backdrop-blur-xl h-screen fixed left-0 top-0 p-6 flex flex-col z-[60]
        transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex items-center justify-between mb-10 px-2">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-black group-hover:scale-110 transition-transform">F</div>
              <span className="text-xl font-black tracking-tight text-white italic">Focus.</span>
            </Link>
          </div>
          {/* Botão Fechar (Só aparece no Mobile) */}
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => setIsOpen(false)} // Fecha ao clicar no mobile
              className="flex items-center gap-4 px-4 py-3 rounded-2xl text-slate-400 hover:bg-white/5 hover:text-amber-500 transition-all group"
            >
              <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm tracking-wide">{item.name}</span>
            </Link>
          ))}
        </nav>

        <button className="flex items-center gap-4 px-4 py-3 text-slate-600 hover:text-red-400 transition-colors mt-auto border-t border-white/5 pt-6">
          <LogOut size={20} />
          <span className="font-bold text-sm uppercase tracking-widest">Sair</span>
        </button>
      </aside>

      {/* Overlay (Escurece o fundo quando o menu abre no mobile) */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
        />
      )}
    </>
  );
}
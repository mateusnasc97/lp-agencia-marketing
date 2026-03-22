import { data } from "@/data/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#030305] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">F</div>
               <span className="text-xl font-bold tracking-tight text-white">Focus<span className="text-indigo-500">.</span></span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Especialistas em transformar investimentos em anúncios em faturamento real para empresas de médio e grande porte.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>{data.Contact.email}</li>
              <li>{data.Contact.whatsapp}</li>
              <li>{data.Contact.address}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Políticas de Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <p>© {year} Agência Focus - Todos os direitos reservados</p>
          <p>Desenvolvido por Mateus Nascimento</p>
        </div>
      </div>
    </footer>
  );
}
export default function ComingSoon() {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 mb-4">
        <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
      </div>
      <h2 className="text-2xl font-bold text-white tracking-tight">Módulo em Desenvolvimento</h2>
      <p className="text-slate-500 max-w-xs mx-auto text-sm">
        Estamos integrando as APIs do Google e Meta Ads para este painel. Disponível em breve.
      </p>
      <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
        Voltar ao Início
      </button>
    </div>
  );
}
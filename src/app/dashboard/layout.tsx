import Sidebar from "./components/Sidebax";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#020203] text-slate-100 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <Sidebar />
      <main className="flex-1 p-4 md:p-6 lg:p-12 lg:ml-64 relative z-10 w-full overflow-x-hidden pt-20 lg:pt-12">
        {children}
      </main>
    </div>  
  );
}
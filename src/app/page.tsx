import { data } from "@/data/data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050508] text-slate-100 selection:bg-indigo-500/30">
      <Navbar />
      <Hero content={data.Hero} />

      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -ml-48"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Soluções para <span className="text-emerald-400">Escalar</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Tiramos a complexidade do marketing para você focar no que importa: seu lucro.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.Services.map((service, index) => (
              <Services key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <About content={data.About} />

      <Contact content={data.Contact} />

      <Footer />
    </main>
  );
}
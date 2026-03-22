interface AboutProps {
  content: {
    title: string;
    description: string;
    ctaText: string;
  };
}

export default function About({ content }: AboutProps) {
  if (!content) return null;

  return (
    <section id="about" className="py-20 bg-[#050507]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          {content.title}
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          {content.description}
        </p>

        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors group cursor-pointer"
        >
          {content.ctaText}
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}

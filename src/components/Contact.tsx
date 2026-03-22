"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact({ content }: any) {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("enviando");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, 
        name: formData.nome,
        email: formData.email,
        message: formData.mensagem,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("sucesso");
      setFormData({ nome: "", email: "", mensagem: "" });
    } else {
      setStatus("erro");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050507] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Inicie sua <span className="text-amber-500">Escala</span></h2>
          <p className="text-slate-400">Preencha os dados abaixo e entraremos em contato em até 24h.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="nome"
              placeholder="Seu Nome"
              required
              value={formData.nome}
              onChange={handleChange}
              className="bg-[#050507] border border-white/10 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu Melhor E-mail"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[#050507] border border-white/10 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all text-white"
            />
          </div>
          <textarea
            name="mensagem"
            placeholder="Fale um pouco sobre o seu negócio e seus objetivos..."
            rows={5}
            required
            value={formData.mensagem}
            onChange={handleChange}
            className="w-full bg-[#050507] border border-white/10 rounded-xl px-4 py-4 focus:border-amber-500 outline-none transition-all text-white"
          ></textarea>
          
          <button 
            type="submit"
            disabled={status === "enviando"}
            className="w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {status === "enviando" ? "Enviando..." : status === "sucesso" ? "Mensagem Enviada!" : status === "erro" ? "Erro ao enviar" : "Enviar Solicitação"}
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
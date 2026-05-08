"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const VOLUMES = [
  "Até 200 trades/mês",
  "Até 500 trades/mês",
  "Até 1.000 trades/mês",
  "Mais de 1.000 trades/mês",
];

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Hero />
      <WhatIs />
      <RegistrationForm />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,220,0.18) 0%, rgba(120,80,220,0) 65%)",
          filter: "blur(40px)",
        }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-24 pb-32 text-center sm:pt-32">
        <div className="flex items-center justify-center gap-6 mb-8">
          <img
            src="/logo_da.png"
            alt="Dollar Academy"
            className="h-20 w-auto object-contain"
          />
          <div className="w-px h-16 bg-white/20" />
          <img
            src="/logo_tbi.png"
            alt="TraderBI"
            className="h-16 w-auto object-contain"
          />
        </div>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Em breve
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/60 sm:text-lg">
          Inscreva-se abaixo para garantir sua vaga.
        </p>

        <a
          href="#cadastro"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-lg bg-[#7850DC] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#6a44c8]"
        >
          Garantir minha vaga →
        </a>
      </div>
    </section>
  );
}

function WhatIs() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto w-full max-w-3xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Como funciona o desafio?
        </h2>
        <div className="mt-10 rounded-2xl border border-[#7850DC]/40 bg-[#7850DC]/5 p-10 text-center">
          <p className="text-lg text-white/70">Em breve</p>
        </div>
      </div>
    </section>
  );
}

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [volume, setVolume] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !volume) {
      setError("Preencha todos os campos.");
      return;
    }
    setLoading(true);
    setError("");
    const { error: insertError } = await supabase
      .from("dollar_academy_registrations")
      .insert({ name, email, volume });
    setLoading(false);
    if (insertError?.code === "23505") {
      setError("Este e-mail já está cadastrado!");
    } else if (insertError) {
      setError("Erro ao salvar. Tente novamente.");
    } else {
      setSuccess(true);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#7850DC]";

  return (
    <section id="cadastro" className="border-t border-white/5 py-24">
      <div className="mx-auto w-full max-w-md px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Garanta sua vaga
        </h2>

        {success ? (
          <p className="mt-10 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-sm text-emerald-300">
            Cadastro realizado! Entraremos em contato.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4" noValidate>
            <input
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className={inputClass}
            />
            <select
              value={volume}
              onChange={(e) => {
                setVolume(e.target.value);
                if (error) setError("");
              }}
              className={`${inputClass} ${volume ? "" : "text-white/30"}`}
            >
              <option value="" className="bg-[#0c0c1c] text-white/40">
                Selecione seu volume...
              </option>
              {VOLUMES.map((v) => (
                <option key={v} value={v} className="bg-[#0c0c1c] text-white">
                  {v}
                </option>
              ))}
            </select>

            {error && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-lg bg-[#7850DC] text-sm font-semibold text-white transition-colors hover:bg-[#6a44c8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Confirmar inscrição →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-6 text-center text-xs text-white/45">
        <p>© 2026 RGM Consulting LTDA — CNPJ 39.288.530/0001-12</p>
        <p>
          <a
            href="mailto:contato@traderbi.com.br"
            className="text-white/60 hover:text-white"
          >
            contato@traderbi.com.br
          </a>
        </p>
        <p className="flex items-center gap-3">
          <Link href="/termos" className="hover:text-white">
            Termos de Uso
          </Link>
          <span className="text-white/20">|</span>
          <Link href="/privacidade" className="hover:text-white">
            Política de Privacidade
          </Link>
        </p>
      </div>
    </footer>
  );
}

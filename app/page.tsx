import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <section className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-32 h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(120,80,220,0.18) 0%, rgba(120,80,220,0) 65%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
          <div className="mb-10 flex items-center justify-center gap-6">
            <img
              src="/logo_da.png"
              alt="Dollar Academy"
              className="h-32 w-auto object-contain sm:h-40"
            />
            <div className="h-14 w-px bg-white/20 sm:h-16" />
            <img
              src="/logo_tbi.png"
              alt="TraderBI"
              className="h-24 w-auto object-contain sm:h-32"
            />
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Desafio Prax 30 dias
          </h1>

          <a
            href="https://app.traderbi.com.br/signup?tag=dollar-academy"
            className="mt-12 inline-flex h-12 items-center justify-center rounded-lg bg-[#7850DC] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#6a44c8]"
          >
            Cadastre-se no TraderBI →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
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
    </main>
  );
}

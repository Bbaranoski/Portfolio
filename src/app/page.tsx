import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center py-24 px-6 ">

      {/* HERO */}
      <section className="max-w-3xl space-y-6">

        <h1 className="text-5xl font-bold">
          Olá, eu sou o Breno
        </h1>

        <p className="text-xl text-gray-600">
          Desenvolvedor focado em React, Next.js e TypeScript.
          Estou em busca da minha primeira oportunidade como
          desenvolvedor júnior para criar aplicações modernas e escaláveis.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-100 hover:text-black transition"
            href="/projects"
          >
            Ver Projetos
          </a>

          <a className="border px-6 py-3 rounded-lg hover:bg-gray-100 hover:text-black transition"
            href="https://github.com/Bbaranoski"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="mt-20 max-w-3xl">

        <h2 className="text-2xl font-semibold mb-6">
          Tecnologias
        </h2>

        <TechStack/>
      </section>
    </main>
  );
}

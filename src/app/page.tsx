import TechStack from "@/components/TechStack";
import { projects } from "@/data/Project"
import ProjectCard from "@/components/ProjectCard"

export default function Home() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <main className="flex flex-col items-center text-center py-24 px-6 ">

      {/* HERO */}
      <section className="max-w-3xl space-y-6">

        <h1 className="text-5xl font-bold">
          Olá, eu sou o Breno
        </h1>

        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          Desenvolvedor focado em React, Next.js e TypeScript.
          Estou em busca da minha primeira oportunidade como
          desenvolvedor júnior para criar aplicações modernas e escaláveis.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg dark:hover:bg-zinc-100 hover:bg-zinc-800 transition"
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
      <section className="mt-20 max-w-3xl mb-12">

        <h2 className="text-2xl font-semibold mb-6">
          Tecnologias
        </h2>

        <TechStack/>
      </section>

      {/* PROJETOS */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          Projetos em destaque
        </h2>

        <div className="grid md-grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

import { projects } from "@/data/Project";
import PojectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <main className="py-16">
            <h1 className="text-3xl font-bold mb-10">
                Meus Projetos
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <PojectCard
                        key={project.title}
                        {...project}
                    />
                ))}
            </div>
        </main>
    )
}
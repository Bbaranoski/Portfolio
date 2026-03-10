import { Project } from "@/types/projects";

export const projects: Project[] = [
    {
        title: "ToDo App",
        description: "Aplicação de gerenciamento de tarefas.",
        technologies: ["React", "TypeScript", "Tailwind", "Next.js", "Nodejs", "Prisma", "PostgresSQL", "Nest.js"],
        github: "https://github.com/Bbaranoski/estudo",
        image: "/projects/placeholder.jpg"
    },
    {
        title: "WinMo",
        description: "Replica do jogo Term.oo com duelo entre jogadores.",
        technologies: ["React", "TypeScript", "Tailwind", "Next.js", "Nodejs", "Prisma", "PostgresSQL", "Socket.io"],
        github: "https://github.com/Bbaranoski/Cinco",
        image: "/projects/placeholder.jpg"
    },
    {
        title: "Restaurante",
        description: "Um restaurante fictício com temática do minecraft.",
        technologies: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/Bbaranoski/restaurant",
        image: "/projects/mine.png"
    },
    {
        title: "Weather",
        description: "Um aplicação simples utilizando uma API para receber informações de clima do país informado.",
        technologies: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/Bbaranoski/Weather-App",
        image: "/projects/weather.png"
    }
]
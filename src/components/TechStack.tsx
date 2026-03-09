import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";

export default function TechStack() {
    return (
        <div className="flex flex-wrap justify-center gap-6 text-3xl">

            <FaReact title="React" className="hover:scale-110 transition" />

            <SiNextdotjs title="Next.js" className="hover:scale-110 transition" />

            <SiTypescript title="TypeScript" className="hover:scale-110 transition" />

            <FaNodeJs title="Node.js" className="hover:scale-110 transition" />

            <SiPostgresql title="PostgresSQL" className="hover:scale-110 transition" />

            <FaGithub title="GitHub" className="hover:scale-110 transition" />

        </div>
    )
}
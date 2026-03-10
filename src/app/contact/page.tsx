import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa"

export default function Contact() {
    return (
        <section className="space-y-6 pt-16">
            <h1 className="text-3xl font-bold">
                Contato
            </h1>

            <p className="text-zinc-600 dark:text-zinc-400">
                Estou atualmente procurando por oportunidades como desenvolvedor Júnior
                ou Estágio. Caso se interesse ou apenas gostaria de conversar comigo
                abaixo está meus contatos.
            </p>

            <p className="flex items-center gap-2 px-4 py-2">
                <FaWhatsapp size={18} />
                (54) 98413-8378
            </p>

            <p className="flex items-center gap-2 px-4 py-2">
                <FaInstagram size={18} />
                brenobaranoski
            </p>

            <p className="flex items-center gap-2 px-4 py-2">
                <Mail size={18} />
                breno.b.o.baranoski@gmail.com
            </p>

            <div className="flex gap-4 pt-4">
                <a className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    href="https://github.com/Bbaranoski"
                    target="_blank"
                >
                    <FaGithub size={18} />
                    GitHub
                </a>

                <a className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    href="https://www.linkedin.com/in/breno-baranoski-667414288/"
                    target="_blank"
                >
                    <FaLinkedin size={18} />
                    LinkedIn
                </a>

                <a className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    href="mailto:breno.b.o.baranoski@gmail.com"
                >
                    <Mail size={18} />
                    Email
                </a>
            </div>
        </section>
    )
}
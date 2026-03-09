export default function Contact() {
    return(
        <section className="space-y-6">
            <h1 className="text-3xl font-bold">
                Contato
            </h1>

            <p>
                Você pode entrar em contato pelo links abaixo:
            </p>

            <div className="flex flex-col gap-3">
                <a className="hover:underline"
                href="https://github.com/Bbaranoski"
                target="_blank"
                >
                    GitHub
                </a>

                <a className="hover:underline"
                href="https://www.linkedin.com/in/breno-baranoski-667414288/"
                target="_blank"
                >
                    LinkedIn
                </a>

                <a className="hover:underline"
                href="mailto:breno.b.o.baranoski@gmail.com"
                >
                    Email
                </a>
            </div>
        </section>
    )
}
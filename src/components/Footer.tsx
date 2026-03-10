export default function Footer() {
    return(
        <footer className="mt-24 border-t pt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
            <p>
                © {new Date().getFullYear()} Breno — Portfolio
            </p>
            <a className="inline-block text-blue-600 hover:underline"
                target="_blank"
                href="https://github.com/Bbaranoski/Portfolio"
            >
                GitHub
            </a>
        </footer>
    )
}
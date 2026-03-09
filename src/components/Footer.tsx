export default function Footer() {
    return(
        <footer className="mt-24 border-t pt-8 text-center text-sm text-zinc-500">
            <p>
                © {new Date().getFullYear()} Breno — Portfolio
            </p>
        </footer>
    )
}
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <header className="bg-white/70 dark:bg-zinc-900/70 fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b">
            <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="font-semibold text-lg">
                    Breno
                </div>
                <div className="flex gap-6 items-center">
                    <Link className= "hover:opacity-70" href={"/"}>Home</Link>
                    <Link className= "hover:opacity-70" href={"/projects"}>Pojetos</Link>
                    <Link className= "hover:opacity-70" href={"/about"}>Sobre</Link>
                    <Link className= "hover:opacity-70" href={"/contact"}>Contato</Link>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
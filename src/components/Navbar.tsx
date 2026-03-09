import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="flex p-6 border-b items-center justify-between">
            <div className="flex gap-6 items-center">
                <Link href={"/"}>Home</Link>
                <Link href={"/projects"}>Pojetos</Link>
                <Link href={"/about"}>Sobre</Link>
                <Link href={"/contact"}>Contato</Link>
            </div>
            <ThemeToggle />
        </nav>
    )
}
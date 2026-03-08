import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex gap-6 p-6 border-b">
            <Link href={"/"}>Home</Link>
            <Link href={"/projects"}>Pojetos</Link>
            <Link href={"/about"}>Sobre</Link>
            <Link href={"/contact"}>Contato</Link>
        </nav>
    )
}
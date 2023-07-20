import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-primary text-white p-5 uppercase">
            <div className="container flex items-center justify-between">
                <h1 className="text-3xl font-light">Christever</h1>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <Link href={"/"} className="link">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="link">
                                Projets
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="link">
                                Ajouter
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

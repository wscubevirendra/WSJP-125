import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="w-full bg-teal-500 px-4 py-2">
            <div className="max-w-7xl text-white">
                <nav>
                    <ol className="flex gap-10">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

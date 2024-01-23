import { Link } from "react-router-dom"

export default function Sitemap(){
    return (
        <ul>
            <li>
                <Link to="/presentation">Presentation</Link>
            </li>
            <li>
                <Link to="/menu">Menu</Link>
            </li>
            <li>
                <Link to="/location">Location</Link>
            </li>
            <li>
                <Link to="/cart">Cart 🛒</Link>
            </li>
        </ul>
    )
}
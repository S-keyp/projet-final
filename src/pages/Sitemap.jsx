import { Link } from "react-router-dom"

export default function Sitemap() {
    return (
        <section className="section">
            <h3 className="section__subtitle">Sitemap</h3>
            <ul className="section__paragraph">
                <li>
                    <Link to="/presentation">Presentation</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/dish/1">Dish detail example</Link>
                </li>
                <li>
                    <Link to="/location">Location</Link>
                </li>
                <li>
                    <Link to="/cart">Cart 🛒</Link>
                </li>
                <li>
                    <Link to="/order-validation">Order validation</Link>
                </li>
                <li>
                    <Link to="/not-found">Not found</Link>
                </li>
            </ul>
        </section>
    )
}
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export default function LocationPage() {
	return (
		<>
			<header className="header">
				<h1 className="header__title">Contact Gourmet Fusion Bistro</h1>
			</header>

			<section className="section">
				<h3 className="section__subtitle">Exceptional Service</h3>
				<div className="section__paragraph company-info-adress">
					<h5>Location</h5>
					<p>
						📍 123 Culinary Street
						Cityville, Gourmetland
						Zip Code: 12345
					</p>
				</div>
				<div className="section__paragraph company-info-contact">
					<p>
						Phone
						<a href="tel:+33612345678">📞 (555) 123-4567</a>
					</p>

					<p>
						Email
						<a href="mailto:votreadresse@mail.fr">📧 info@gourmetfusionbistro.com</a>
					</p>
				</div>
			</section>

			<section className="section">
				<h3 className="section__subtitle">Hours of Operation</h3>
				<p className="section__paragraph">
					Monday to Friday: 11:00 AM - 10:00 PM
					Saturday and Sunday: 12:00 PM - 11:00 PM
				</p>
			</section>

			<section className="section">
				<h3 className="section__subtitle">Reservation</h3>
				<p className="section__paragraph">
					For reservations, please call us or use our online reservation system. We recommend booking in advance to ensure availability.
				</p>
			</section>

			<section className="section">
				<h2 className="section__subtitle">Connect With Us</h2>
				<p className="section__paragraph">
					Stay connected with Gourmet Fusion Bistro on social media for the latest updates, special promotions, and behind-the-scenes glimpses of our culinary creations.
				</p>
				<ul className="section__list">
					<li>Facebook 📘</li>
					<li>Instagram 📸</li>
					<li>Twitter 🐦</li>
				</ul>
			</section>

			<section className="section">
				<h2 className="section__subtitle">Feedback</h2>
				<p className="section__paragraph">
					We value your feedback! If you have any comments, suggestions, or inquiries, please feel free to reach out to us. Your satisfaction is our priority.
				</p>
			</section>

			<section className="section">
				<MapContainer style={{ height: "300px", width: "100%" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[51.505, -0.09]}>
						<Popup>
							We are here !
						</Popup>
					</Marker>
				</MapContainer>
			</section>
		</>
	)
};


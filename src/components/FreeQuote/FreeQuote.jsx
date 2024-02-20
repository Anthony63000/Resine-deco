
import { Link } from "react-router-dom"

const FreeQuote = () => {
    return (
        <section className="quote">
            <div className="quote-found"></div>
            <div className="quote-found-container">
                <p className="quote-found-container-text">
                    Transformez vos idées en réalité dès aujourd'hui !
                </p>
                <Link to={"/contact"} className="quote-found-container-link">
                    Contactez-nous pour un devis
                </Link>
            </div>
        </section>
    )
}

export default FreeQuote
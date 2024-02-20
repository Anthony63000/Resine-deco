import { Link } from "react-router-dom"

import puyDeDomeImage from "../../images/location/puyDeDome.webp"

const Location = () => {
    return (
        <section className="location">
            <div className="location-found">
            </div>
            <div className="location-found-container">
                <div className="location-found-container-left">
                    <h3 className="location-found-container-left-title">
                        Zone d'intervention
                    </h3>
                    <p className="location-found-container-left-text">
                        Notre entreprise est implantée dans les départements 
                        du <b className="location-found-container-left-text-important">Puy-de-Dôme</b> et 
                        de <b className="location-found-container-left-text-important">l'Allier</b>, 
                        où nous proposons nos services spécialisés en résine époxy, moquette de marbre, petite maçonnerie et enduit décoratif stuc. 
                        Nous sommes fiers de contribuer à l'embellissement et à la rénovation des espaces dans cette région. 
                        Contactez-nous pour vos projets de décoration et de rénovation dans 
                        le <b className="location-found-container-left-text-important">Puy-de-Dôme</b> et <b className="location-found-container-left-text-important">l'Allier !</b>
                    </p>
                    <Link to={"/contact"} className="location-found-container-left-link">
                        Contactez-nous
                    </Link>
                </div>
                <div className="location-found-container-right">
                    <img 
                        className="location-found-container-right-image"
                        src={puyDeDomeImage} 
                        alt="Image du volcan du Puy-de-dôme situé en auvergne" 
                    />
                </div>
            </div>   
        </section>
    )
}

export default Location

import { Link } from "react-router-dom"

import ImageWork from "../../images/Logo/LogoEntierXlWhite.webp"

const AboutWork = () => {
    return (
        <section className="aboutWork">
            <div className="aboutWork-left">
                <h3 className="aboutWork-left-title">
                    Résine'Déco63 ouvres ses portes !
                </h3>
                <p className="aboutWork-left-text">
                    Après 15 ans d'expériences dans la maçonnerie, <b>Résine'déco63</b> ouvre ses portes. 
                    Passionné par la création et la rénovation, je me lance dans l'aventure entrepreneuriale avec une vision claire : 
                    offrir des solutions innovantes et esthétiques pour les espaces intérieurs et extérieurs. Avec une expertise dans divers 
                    domaines, notamment la résine époxy, la moquette de marbre, la petite maçonnerie et l'enduit décoratif stuc, 
                    je m'engage à fournir un travail de qualité, alliant savoir-faire artisanal et techniques modernes. 
                    Mon objectif est de transformer les idées en réalité, en apportant une touche unique et personnalisée à chaque projet. 
                    Ensemble, donnons vie à vos espaces et créons des environnements fonctionnels et élégants qui reflètent votre style et 
                    votre personnalité.
                </p>
                <Link to={"/travaux"} className="aboutWork-left-link">
                    Découvrez nos réalisations
                </Link>
            </div>
            <div className="aboutWork-right">
                <img 
                    src={ImageWork}
                    alt="Image vectoriel de travailleur dans le domaine du bâtiment" 
                    className="aboutWork-right-image"
                />
            </div>
        </section>
    )
}

export default AboutWork
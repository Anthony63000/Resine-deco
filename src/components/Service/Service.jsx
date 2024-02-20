
import ServiceCard from "./ServiceCard";

import moquetteImage from "../../images/services/moquetteDeMarbre.webp";
import maçonnerieImage from "../../images/services/maçonnerie.webp";
import stucImage from "../../images/services/stuc.webp";
import betonCireImage from "../../images/services/bétonCiré.webp"
import resineImage from "../../images/services/résine.webp";
import { Link } from "react-router-dom";

const Service = () => {
    return (
        <section className="service">
            <div className="service-top">
                <ServiceCard 
                    title="Résine Epoxy 3D"
                    imageCardSrc={resineImage}
                    imageCardSrcAlt="Image d'un réalisation en résine Epoxy"
                    mode="resine"
                />
                <ServiceCard 
                    title="Moquette de marbre"
                    imageCardSrc={moquetteImage}
                    imageCardSrcAlt="Image de plusieurs échantillons de moquette de marbre"
                    mode="moquette"
                />
                <ServiceCard 
                    title="Béton ciré"
                    imageCardSrc={betonCireImage}
                    imageCardSrcAlt="Image d'une dalle en béton ciré"
                    mode="béton"
                />
                <ServiceCard 
                    title="Enduit décoratif Stuc"
                    imageCardSrc={stucImage}
                    imageCardSrcAlt="Image d'un enduit stuc avec une forme qui représente un soleil"
                    mode="stuc"
                />
                <ServiceCard 
                    title="Maçonnerie"
                    imageCardSrc={maçonnerieImage}
                    imageCardSrcAlt={"Image d'une sacoche d'un maçon avec des outils à l'intérieur"}
                    mode="maçonnerie"
                />
            </div>
            <div className="service-middle">
                <p className="service-middle-text">
                    Rendez vous comptes des résultats des ces prestations
                </p>
                <Link className="service-middle-link" to={"/works"}>
                    Consultez nos réalisations
                </Link>
            </div>
        </section>
    )
}

export default Service
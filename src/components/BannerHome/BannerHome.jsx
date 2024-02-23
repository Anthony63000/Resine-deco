
import { Link } from "react-router-dom";
import logo from "../../images/Logo/logoR.svg"
import { Helmet } from "react-helmet";

import defaultFound from "../../images/BannerHome/briquette.webp";
import XLFound from "../../images/BannerHome/XL/briquetteXL.webp";
import LFound from "../../images/BannerHome/L/briquetteL.webp";
import MFound from "../../images/BannerHome/M/briquetteM.webp";
import SFound from "../../images/BannerHome/S/briquetteS.webp";

const BannerHome = () => {

    return (
        <section className="bannerHome">
            <Helmet>
                <link rel="preload" href={defaultFound} as="image" />
                <link rel="preload" href={XLFound} as="image" />
                <link rel="preload" href={LFound} as="image" />
                <link rel="preload" href={MFound} as="image" />
                <link rel="preload" href={SFound} as="image" />
            </Helmet>
            <div className="bannerHome-fixed">
                <img 
                    className="bannerHome-fixed-found"
                    alt="Image d'un mur en brique" 
                    srcSet={`${SFound} 320w, ${MFound} 425w, ${LFound} 768w, ${XLFound} 1024w, ${defaultFound} 1440w`}
                />
            </div>
            <div className="bannerHome-content">
                <img 
                    src={logo} 
                    alt="Image du logo de l'entreprise" 
                    className="bannerHome-content-image"
                />
                <h1 className="bannerHome-content-title">
                    Applicateur de Résine et enduit à Clermont-Ferrand
                </h1>
                <h2 className="bannerHome-content-text">
                    Application d'enduit type résine Epoxy 3D | Moquette de marbre | Béton ciré | Enduit décoratif Stuc | Travaux de maçonnerie
                </h2>
                <Link to={"/prestations"}className="bannerHome-content-link">
                    Découvrez nos prestations
                </Link>
            </div>
        </section>
    )
}

export default BannerHome
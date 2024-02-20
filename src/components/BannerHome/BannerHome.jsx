
import { Link } from "react-router-dom";
import found from "../../images/BannerHome/briquette.webp";
import logo from "../../images/Logo/logoR.svg"

const BannerHome = () => {
    return (
        <section className="bannerHome">
            <div className="bannerHome-fixed">
                <img 
                    className="bannerHome-fixed-found"
                    src={found} 
                    alt="Image d'un mur en brique" 
                />
            </div>
            <div className="bannerHome-content">
                <img 
                    src={logo} 
                    alt="Image du logo de l'entreprise" 
                    className="bannerHome-content-image"
                />
                <h2 className="bannerHome-content-title">
                    Applicateur de Résine et enduit à Clermont-Ferrand
                </h2>
                <p className="bannerHome-content-text">
                    Application d'enduit type résine Epoxy 3D | Moquette de marbre | Béton ciré | Enduit décoratif Stuc | Travaux de maçonnerie
                </p>
                <Link to={"/services"}className="bannerHome-content-link">
                    Découvrez nos prestations
                </Link>
            </div>
        </section>
    )
}

export default BannerHome

import logoEntreprise from "../../images/Logo/logoR.svg";

const BannerPages = ({ bannerImage, bannerImageAlt, title, text }) => {
    return (
        <section className="bannerPages">
            <div className="bannerPages-fixed">
                <img
                    className="bannerPages-fixed-found" 
                    src={bannerImage}
                    alt={bannerImageAlt} 
                />
            </div>
            <div className="bannerPages-container">
                <img
                    className="bannerPages-container-image" 
                    src={logoEntreprise} 
                    alt="Logo de l'entreprise Résine'Déco63" 
                    loading="lazy"
                />
                <h2 className="bannerPages-container-title">
                    {title}
                </h2>
                <p className="bannerPages-container-text">
                    {text}
                </p>
            </div>
        </section>
    )
}

export default BannerPages
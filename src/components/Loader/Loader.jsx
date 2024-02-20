
import imageLogo from "../../images/Logo/LogoEntierXlWhite.webp"

const Loader = () => {
    return (
        <section className="loader">
            <img 
                className="loader-image"
                src={imageLogo} 
                alt="Image du Logo de l'entreprise Résine déco63 qui représente un R rouge dans deux carrés" />
        </section>
    )
}

export default Loader
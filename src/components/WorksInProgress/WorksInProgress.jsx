
import worksInProgress from "../../images/workInProgress/worksInprogress.webp";

const WorksInProgress = () => {
    return (
        <section className="worksInProgress">
            <img 
                className="worksInProgress-image" 
                src={worksInProgress}
                alt="Image d'un casque de chantier" 
            />
            <p className="worksInProgress-text">
                Page en cours de construction ! 
            </p>
            <p className="worksInProgress-subText">
                Revenez un peu plus tard pour découvrir l'ensembles des réalisations de <b>Résine Déco63</b>
            </p>
        </section>
    )
}

export default WorksInProgress
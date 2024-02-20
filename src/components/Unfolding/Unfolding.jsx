import UnfoldingCard from "./UnfoldingCard"

import casqueImage from '../../images/unfolding/casque.svg';
import reunionImage from "../../images/unfolding/reunion.svg";
import devisImage from "../../images/unfolding/devis.webp";
import travauxImage from '../../images/unfolding/travaux.svg';
import factureImage from "../../images/unfolding/facture.svg";
import { Link } from "react-router-dom";

const Unfolding = () => {
    return (
        <section className="unfolding">
            <div className="unfolding-top">
                <h3 className="unfolding-top-title">
                    Parcours de vos projets
                </h3>
                <p className="unfolding-top-subTitle">
                    Description de la feuille de route de vos projets
                </p>
            </div>
            <div className="unfolding-middle">
                <UnfoldingCard 
                    unfoldingCardImage={casqueImage}
                    unfoldingCardAltImage="Image vectoriel d'un casque de communication"
                    title="Premier contact"
                    description="Lors de notre premier contact, je prendrai le temps d'écouter attentivement vos besoins et vos idées afin de comprendre pleinement votre vision pour votre projet"
                    number={"one"}
                />
                <UnfoldingCard 
                    title="Rendez vous sur le chantier"
                    unfoldingCardImage={reunionImage}
                    unfoldingCardAltImage="Image vectoriel de deux personnages et une table qui représente un réunion"
                    description="Avant d'élaborer chaque devis, je me rends sur place pour évaluer personnellement les besoins et les spécificités de votre projet"
                    number={"two"}
                />
                <UnfoldingCard 
                    title="Elaboration du devis"
                    description="Pour l'étape de l'élaboration du devis, je prends le temps nécessaire pour analyser minutieusement vos besoins et vos attentes, afin de vous proposer une offre personnalisée et adaptée à votre projet"
                    unfoldingCardImage={devisImage}
                    unfoldingCardAltImage="Image d'un feuille qui représente un devis"
                    number={"three"}
                />
                <UnfoldingCard 
                    title="Travaux"
                    description="Pendant la phase des travaux, je m'engage à mettre en œuvre chaque élément du projet avec précision et rigueur, en veillant à respecter vos directives et à atteindre les objectifs fixés ensemble."
                    unfoldingCardImage={travauxImage}
                    unfoldingCardAltImage="Image qui représente des briques qui sont entrain d'être posées"
                    number={"four"}
                />
                <UnfoldingCard 
                    title="Facturation"
                    description="Pendant la phase de facturation, je veille à ce que chaque service fourni soit clairement détaillé et transparent dans la documentation, assurant ainsi une compréhension complète des coûts associés aux travaux réalisés."
                    unfoldingCardAltImage="Image vectoriel qui réprésente une facture"
                    unfoldingCardImage={factureImage}
                    number={"five"}
                />
            </div>
            <div className="unfolding-bottom">
                <div className="unfolding-bottom-found">
                </div>
                <div className="unfolding-bottom-container">
                    <p className="unfolding-bottom-container-text">
                        Des travaux | Des idées | Un projet 
                    </p>
                    <Link className="unfolding-bottom-container-link" to={"/services"}>
                        Décrouvrez nos prestations
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Unfolding

import { Link } from "react-router-dom";
import gitHubLogo from "../../images/network/github.svg";
import maltLogo from "../../images/network/malt.svg";
import facebookLogo from "../../images/network/facebook.svg";
import instaLogo from "../../images/network/instagram.svg"
import logoEntreprise from "../../images/Logo/logoAnthodev.svg";
import logoResine from "../../images/Logo/logoR.svg";
import LinkFooter from "./LinkFooter";
import LinkFooterService from "./LinkFooterService";
import LinkNetworkFooter from "./LinkNetworkFooter";

const Footer = () => {
    return (
        <footer>
            <section className="footer">
                <div className="footer-found"></div>
                <div className="footer-found-container">
                    <div className="footer-found-container-top">
                        <div className="footer-found-container-top-columns">
                            <img 
                                className="footer-found-container-top-columns-image" 
                                src={logoResine} alt="Image du logo de l'entreprise Résine déco63" 
                            />
                        </div>
                        <div className="footer-found-container-top-columns">
                            <h4 className="footer-found-container-top-columns-title">
                                Navigation
                            </h4>
                            <LinkFooter 
                                link="Accueil"
                                linkTarget={"/"}
                            />
                            <LinkFooter 
                                link="Nos prestations"
                                linkTarget={"/services"}
                            />
                            <LinkFooter 
                                link="Nos réalisations"
                                linkTarget={"/works"}
                            />
                            <LinkFooter 
                                link="Contact"
                                linkTarget={"/contact"}
                            />
                        </div>
                        <div className="footer-found-container-top-columns">
                            <h4 className="footer-found-container-top-columns-title">
                                Nos prestations
                            </h4>
                            <LinkFooterService 
                                link="Résine Epoxy 3D"
                                linkTarget={"/services"}
                            />
                            <LinkFooterService 
                                link="Moquette de marbre"
                                linkTarget={"/services"}
                            />
                            <LinkFooterService 
                                link="Béton ciré"
                                linkTarget={"/services"}
                            />
                            <LinkFooterService
                                link="Enduit décoratif Stuc"
                                linkTarget={"/services"}
                            />
                            <LinkFooterService
                                link="Maçonnerie"
                                linkTarget={"/services"}
                            />
                        </div>
                        <div className="footer-found-container-top-columns">
                            <h4 className="footer-found-container-top-columns-title">
                                Contact | Résine'deco63
                            </h4>
                            <p className="footer-found-container-top-columns-link">
                                tél : 07 60 81 59 73
                            </p>
                            <p className="footer-found-container-top-columns-link">
                                mail : mario_86@hotmail.fr
                            </p>
                            <div className="footer-found-container-top-columns-network">
                                <LinkNetworkFooter 
                                    LogoNetwork={facebookLogo}
                                    logoNetworkAlt="Image du logo de facebook qui représsente un f sous un fond bleu"
                                />
                                <LinkNetworkFooter 
                                    LogoNetwork={instaLogo}
                                    logoNetworkAlt="Image du logo de instagram qui représente un caméra sous un fond violet"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer-found-container-bottom">
                        <div className="footer-found-container-bottom-left">
                            <p className="footer-found-container-bottom-left-text">
                                Réalisation du site :
                            </p>
                            <Link className="footer-found-container-bottom-left-link">
                                Borel Anthony
                            </Link>
                        </div>
                        <div className="footer-found-container-bottom-center">
                            <p className="footer-found-container-bottom-center-copy">
                                © 2023 Borel Anthony, Résine'deco63. Tous droits réservés.
                            </p>
                            <p className="footer-found-container-bottom-center-mention">
                                Mentions légales
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
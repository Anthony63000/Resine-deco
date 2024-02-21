
import { Link } from "react-router-dom";
import facebookLogo from "../../images/network/facebook.svg";
import instaLogo from "../../images/network/instagram.svg"
import logoResine from "../../images/Logo/logoR.svg";
import LinkFooter from "./LinkFooter";
import LinkFooterService from "./LinkFooterService";
import LinkNetworkFooter from "./LinkNetworkFooter";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalLegal } from "../../redux/LegalNoticeSlice/legalNoticeSlice";
import LegalNoticeModal from "../LegalNoticeModal/LegalNoticeModal";

const Footer = () => {

    const stateModalLegalNotice = useSelector(state => state.legalNotice.modalState)

    const dispatch = useDispatch()

    const toggleModalLegalNotice = () => {
        dispatch(toggleModalLegal())
    }

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
                                linkTarget={"/prestations"}
                            />
                            <LinkFooter 
                                link="Nos réalisations"
                                linkTarget={"/travaux"}
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
                                linkTarget={"/prestations"}
                            />
                            <LinkFooterService 
                                link="Moquette de marbre"
                                linkTarget={"/prestations"}
                            />
                            <LinkFooterService 
                                link="Béton ciré"
                                linkTarget={"/prestations"}
                            />
                            <LinkFooterService
                                link="Enduit décoratif Stuc"
                                linkTarget={"/prestations"}
                            />
                            <LinkFooterService
                                link="Maçonnerie"
                                linkTarget={"/prestations"}
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
                                    targetLink="https://www.facebook.com/resinedeco63"
                                />
                                <LinkNetworkFooter 
                                    LogoNetwork={instaLogo}
                                    logoNetworkAlt="Image du logo de instagram qui représente un caméra sous un fond violet"
                                    targetLink="https://www.instagram.com/resine_deco63/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer-found-container-bottom">
                        <div className="footer-found-container-bottom-left">
                            <p className="footer-found-container-bottom-left-text">
                                Réalisation du site :
                            </p>
                            <Link target="_blank" to="https://github.com/Anthony63000" className="footer-found-container-bottom-left-link">
                                Borel Anthony
                            </Link>
                        </div>
                        <div className="footer-found-container-bottom-center">
                            <p className="footer-found-container-bottom-center-copy">
                                © 2023 Borel Anthony, Résine'deco63. Tous droits réservés.
                            </p>
                            <p onClick={toggleModalLegalNotice} className="footer-found-container-bottom-center-mention">
                                Mentions légales
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {stateModalLegalNotice && (
                <LegalNoticeModal />
            )}
        </footer>
    )
}

export default Footer
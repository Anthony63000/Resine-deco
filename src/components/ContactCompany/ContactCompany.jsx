
import mailImage from '../../images/contact/mail.svg';
import telImage from '../../images/contact/tel.svg';

import facebookLogo from "../../images/network/facebook.svg";
import instaLogo from "../../images/network/instagram.svg"

import ContactCompanyCard from "./ContactCompanyCard";

const ContactCompany = () => {
    return (
        <section className="contactCompany">
            <div className="contactCompany-top">
                <h3 className="contactCompany-top-title">
                    Nos Adresses
                </h3>
                <p className="contactCompany-top-subTitle">
                    Voici comment nous contacter
                </p>
            </div>
            <div className="contactCompany-middle">
               <ContactCompanyCard
                    title="Appelez-nous"
                    cardImage={telImage}
                    cardImageAlt="Image d'un téléphone noire"
                    text="07 60 81 59 73"
               /> 
               <ContactCompanyCard
                    title="Contactez-nous par mail"
                    cardImage={mailImage}
                    cardImageAlt="Image d'une enveloppe blanche avec les contour noir"
                    text="resine.deco63@gmail.com"
                    link="mailto:resine.deco63@gmail.com"
                    linkText="Cliquez-ici"
               /> 
               <ContactCompanyCard
                    title="Facebook"
                    cardImage={facebookLogo}
                    cardImageAlt="Image lu logo de facebook avec un fond bleu et un f blanc"
                    text="Rejoingnez-nous sur Facebook"
                    linkText="Cliquez-ici"
                    link="https://www.facebook.com/resinedeco63"
               /> 
               <ContactCompanyCard
                    title="Instagram"
                    cardImage={instaLogo}
                    cardImageAlt="Image du logo de intagram avec une camera blanche avec un fond violet"
                    text="Rejoingnez-nous sur Intagram"
                    linkText="Cliquez-ici"
                    link="https://www.instagram.com/resine_deco63/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
               /> 
            </div>
        </section>
    )
}

export default ContactCompany
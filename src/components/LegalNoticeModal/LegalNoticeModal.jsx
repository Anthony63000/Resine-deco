
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleModalLegal } from '../../redux/LegalNoticeSlice/legalNoticeSlice';
import Paragraphe from './Paragraphe';

const LegalNoticeModal = () => {

    const dispatch = useDispatch()

    const toggleModalLegalNotice = () => {
        dispatch(toggleModalLegal())
    }

    return (
        <section className="legalNotice">
            <div className='legalNotice-container'>
                <div className="legalNotice-container-top">
                    <h2 className="legalNotice-container-top-title">
                        Mentions Légales
                    </h2>
                    <FontAwesomeIcon 
                        icon={faTimes} 
                        className='legalNotice-container-top-close'
                        onClick={toggleModalLegalNotice}
                    />
                </div>
                <div className='legalNotice-container-middle'>
                    <Paragraphe 
                        title="Intervenants"
                        text="Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour 
                        la confiance en l'économie numérique, il est précisé aux utilisateurs du site 
                        Résine'Déco63 l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi."
                    />
                    <Paragraphe 
                        title="Edition du site"
                        text="Le présent site, accessible à l’URL www.resinedeco63.com, est édité par :
                        Anthony Borel, résidant au 16 rue Lucie et Raymond Aubrac 63800 Cournon d'auvergne"
                    />
                    <Paragraphe 
                        title="Hébergement"
                        text="Le Site est hébergé par la société vercel, situé 440 N Barranca Ave #4133 Covina, CA 91723, (contact email : privacy@vercel.com)"
                    />
                    <Paragraphe 
                        title="Directeur de publication"
                        text="Le Directeur de la publication du Site est Mario De Barros"
                    />
                    <Paragraphe 
                        title="Nous contacter"
                        text="Par téléphone : +33786262187,
                        Par email : anthony.borel02@gmail.com
                        "
                    />
                    <Paragraphe 
                        title="Utilisation des cookies"
                        text=" Nous confirmons que ce site web n'utilise pas de cookies. 
                        Nous ne plaçons aucun fichier texte sur votre appareil sans votre consentement explicite. 
                        Nous respectons la vie privée de nos utilisateurs et nous nous engageons à fournir une expérience en ligne transparente et sécurisée"
                    />
                </div>
            </div>
        </section>
    )
}

export default LegalNoticeModal
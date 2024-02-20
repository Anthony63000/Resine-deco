
import { Link } from "react-router-dom"

const ContactCompanyCard = ({
    cardImage,
    cardImageAlt,
    title,
    text,
    link,
    linkText
}) => {


    return (
        <div className="contactCompany-middle-card">
            <img 
                className="contactCompany-middle-card-image"
                src={cardImage} 
                alt={cardImageAlt} 
            />
            <h4 className="contactCompany-middle-card-title">
                {title}
            </h4>
            <p className="contactCompany-middle-card-text">
                {text}
            </p>
            {linkText && (
                <Link 
                    className="contactCompany-middle-card-link" 
                    to={link}
                >
                    {linkText}
                </Link>
            )}

        </div>
    )
}
export default ContactCompanyCard
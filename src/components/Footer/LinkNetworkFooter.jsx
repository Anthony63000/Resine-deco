import { Link } from "react-router-dom"

const LinkNetworkFooter = ({ targetLink, LogoNetwork, logoNetworkAlt }) => {
    return (
        <Link 
            to={targetLink} 
            target="_blank" 
            className="footer-found-container-top-columns-network-link"
        >
            <img 
                src={LogoNetwork} 
                alt={logoNetworkAlt} 
                className="footer-found-container-top-columns-network-link-image"
                loading="lazy"
            />
        </Link>
    )
}

export default LinkNetworkFooter
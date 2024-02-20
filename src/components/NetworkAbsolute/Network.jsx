import { Link } from "react-router-dom"

const Network = ({ 
    networkLink, 
    networkClass, 
    networkClassImage, 
    networkImage, 
    networkAltImage 
}) => {
    return (
        <Link 
            to={networkLink} 
            className={networkClass}
            target="_blank"
        >
            <img 
                className={networkClassImage}
                src={networkImage} 
                alt={networkAltImage}
            />
        </Link>
    )
}

export default Network

import { useDispatch } from "react-redux";
import { OpenModal, toggleModeModal } from "../../redux/servicesSlice/servicesSlice";

const ServiceCard = ({ imageCardSrc, imageCardSrcAlt, title, mode }) => {

    const dispatch = useDispatch()

    const toggleModalService = (mode) => {
        dispatch(OpenModal())
        dispatch(toggleModeModal(mode))
    }

    return (
        <div className="service-top-container">
            <img
                className="service-top-container-image" 
                src={imageCardSrc} 
                alt={imageCardSrcAlt} 
            />
            <h3 className="service-top-container-title">
                {title}
            </h3>
            <button onClick={() => toggleModalService(mode)} className="service-top-container-button">
                Voir plus
            </button>
        </div>
    )
}

export default ServiceCard
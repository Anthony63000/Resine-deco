import { useDispatch } from "react-redux"
import { Link, useLocation} from "react-router-dom"
import { OpenModal, toggleModeModal } from "../../redux/servicesSlice/servicesSlice"


const LinkFooterService = ({ link }) => {

    const dispatch = useDispatch()
    const location = useLocation()

    const locationPath = location.pathname

    const openModalFooter = () => {
        if(locationPath !== "/prestations") {
            const timer = setTimeout(() => {
                dispatch(OpenModal())
                if(link === "Résine Epoxy 3D") {
                    dispatch(toggleModeModal("resine"))
                } else if(link === "Moquette de marbre") {
                    dispatch(toggleModeModal("moquette"))
                } else if (link === "Béton ciré") {
                    dispatch(toggleModeModal("béton"))
                } else if (link === "Enduit décoratif Stuc") {
                    dispatch(toggleModeModal("stuc"))
                } else if(link === "Maçonnerie") {
                    dispatch(toggleModeModal("maçonnerie"))
                }
            }, 3000)
            return () => clearTimeout(timer)
        } else {
            dispatch(OpenModal())
            if(link === "Résine Epoxy 3D") {
                dispatch(toggleModeModal("resine"))
            } else if(link === "Moquette de marbre") {
                dispatch(toggleModeModal("moquette"))
            } else if (link === "Béton ciré") {
                dispatch(toggleModeModal("béton"))
            } else if (link === "Enduit décoratif Stuc") {
                dispatch(toggleModeModal("stuc"))
            } else if(link === "Maçonnerie") {
                dispatch(toggleModeModal("maçonnerie"))
            }
        }
    }

    return (
        <Link  
            className="footer-found-container-top-columns-link"
            onClick={openModalFooter}
            to={"/prestations"}
        >
            {link}
        </Link>
    )
}

export default LinkFooterService
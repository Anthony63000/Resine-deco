
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLinkHeader = ({ linkName, icon, link }) => {
    return (
       <NavLink 
            to={link} 
            className={({ isActive }) => 
                isActive 
                    ? `${"headerBis-content-right-nav-link"} ${"headerBis-content-right-nav-link-active"}` 
                    : `${"headerBis-content-right-nav-link"}`
            }
       >
            <FontAwesomeIcon className="headerBis-content-right-nav-link-icon" icon={icon}/>
                {linkName}
       </NavLink> 
    )
}

export default NavLinkHeader

//headerBis-content-right-nav-link
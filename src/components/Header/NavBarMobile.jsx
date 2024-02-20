import NavLinkHeader from "./NavLinkHeader"

import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const NavBarMobile = () => {
    return (
        <nav className="headerBis-content-right-navMobile">
            <NavLinkHeader 
                icon={faHouse}
                link={"/"}
            />
            <NavLinkHeader
                icon={faHammer}
                link={"/services"}
            />
            <NavLinkHeader
                icon={faPersonDigging}
                link={"/works"}
            />
            <NavLinkHeader
                icon={faAddressCard}
                link={"/contact"}
            />
        </nav>
    )
}

export default NavBarMobile
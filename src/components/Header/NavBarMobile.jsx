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
                aria="Accueil"
            />
            <NavLinkHeader
                icon={faHammer}
                link={"/prestations"}
                aria="Nos prestations"
            />
            <NavLinkHeader
                icon={faPersonDigging}
                link={"/travaux"}
                aria="Nos travaux"
            />
            <NavLinkHeader
                icon={faAddressCard}
                link={"/contact"}
                aria="Contactez-nous"
            />
        </nav>
    )
}

export default NavBarMobile
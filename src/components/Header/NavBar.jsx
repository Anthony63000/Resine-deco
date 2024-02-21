import  NavLinkHeader  from "./NavLinkHeader"

import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="headerBis-content-right-nav">
            <NavLinkHeader
                linkName={"Accueil"}
                icon={faHouse}
                link={"/"}
            />
            <NavLinkHeader
                icon={faHammer}
                linkName={"Nos prestations"}
                link={"/prestations"}
            />
            <NavLinkHeader
                linkName={"Nos réalisations"}
                icon={faPersonDigging}
                link={"/travaux"}
            />
            <NavLinkHeader
                linkName={"Contact"}
                icon={faAddressCard}
                link={"/contact"}
            />
        </nav>
    )
}

export default NavBar
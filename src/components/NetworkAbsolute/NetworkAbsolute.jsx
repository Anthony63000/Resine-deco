import Network from "./Network";

import FacebookLogo from "../../images/network/facebook.svg";
import IntagramLogo from "../../images/network/instagram.svg";

const NetworkAbsolute = () => {
    return (
        <section className="networkAbsolute">
            <Network 
                networkLink={"https://www.facebook.com/resinedeco63"}
                networkClass={"networkAbsolute-link"}
                networkClassImage={"networkAbsolute-link-image"}
                networkImage={FacebookLogo}
                networkAltImage={"Logo de Facebook qui représente un f avec un fond bleu"}
            />
            <Network
                 networkImage={IntagramLogo}
                 networkClass={"networkAbsolute-link"}
                 networkClassImage={"networkAbsolute-link-image"}
            />
        </section>
    )
}

export default NetworkAbsolute
import Network from "./Network";

import FacebookLogo from "../../images/network/facebook.svg";
import IntagramLogo from "../../images/network/instagram.svg";
import mailLogo from "../../images/contact/mail.svg"

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
                 networkAltImage="Logo de instagram qui réprésente une caméra avec un fond violet"
                 networkLink="https://www.instagram.com/resine_deco63/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            />
            <Network
                 networkImage={mailLogo}
                 networkClass={"networkAbsolute-link"}
                 networkClassImage={"networkAbsolute-link-image"}
                 networkAltImage="Image d'une enveloppe avec des contours noire"
                 networkLink="mailto:resine.deco63@gmail.com"
            />
        </section>
    )
}

export default NetworkAbsolute
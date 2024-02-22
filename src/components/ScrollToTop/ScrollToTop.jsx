import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        switch (pathname) {
            case '/':
                document.title = "Résine'Déco63 - Accueil";
                break;
            case '/prestations':
                document.title = "Résine'Déco63 - Nos Prestations";
                break;
            case '/travaux':
                document.title = "Résine'Déco63 - Nos Travaux";
                break;
            case '/contact':
                document.title = " Résine'Déco63 - Contactez-nous";
                break;
            default:
                document.title = "Résine'Déco63";
        }
    }, [pathname]);

    return null;
}

export default ScrollToTop;

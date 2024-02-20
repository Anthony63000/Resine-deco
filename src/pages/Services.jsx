import BannerPages from "../components/BannerPages/BannerPages";
import Header from "../components/Header/Header";
import Service from "../components/Service/Service";
import Footer from "../components/Footer/Footer";

import imageServives from "../images/banner/services.webp"
import FreeQuote from "../components/FreeQuote/FreeQuote";
import ServiceModal from "../components/ServiceModal/ServiceModal";


import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const Services = () => {

    const stateModalService = useSelector(state => state.service.modalServiceIsOpen)

    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app">
            {stateModalService && (
                <ServiceModal />
            )}
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <Header/>
                    <main>
                        <BannerPages
                            bannerImage={imageServives}
                            bannerImageAlt={"Image d'un homme qui mélange un produit pour faire de la résine"}
                            title="Nos Prestations"
                            text="Découvrez dès maintenant notre large gamme de prestations 
                            pour répondre à tous vos besoins ! Explorez notre offre complète dès aujourd'hui."
                        />
                        <Service />
                        <FreeQuote/>
                    </main>
                    <Footer/>
                </>
            )}
        </div>
    )
}

export default Services
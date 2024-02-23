import React, { useState, useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";


import Header from "../components/Header/Header";
import BannerPages from "../components/BannerPages/BannerPages";
import Service from "../components/Service/Service";
import Footer from "../components/Footer/Footer";
import FreeQuote from "../components/FreeQuote/FreeQuote";
import ServiceModal from "../components/ServiceModal/ServiceModal";

import imageServives from "../images/banner/services/services.webp";
import imageServivesL from "../images/banner/services/servicesL.webp";
import imageServivesM from "../images/banner/services/servicesM.webp";
import imageServivesS from "../images/banner/services/servicesS.webp";

const Services = () => {
    const stateModalService = useSelector(state => state.service.modalServiceIsOpen);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app">
            <Suspense fallback={<Loader />}>
                {stateModalService && (
                    <ServiceModal />
                )}
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Header />
                        <main>
                            <BannerPages
                                bannerImage={`${imageServives} 1440w, ${imageServivesL} 1024w, ${imageServivesM} 768w, ${imageServivesS} 425w`}
                                bannerImageAlt={"Image d'un homme qui mélange un produit pour faire de la résine"}
                                title="Nos Prestations"
                                text="Découvrez dès maintenant notre large gamme de prestations pour répondre à tous vos besoins ! Explorez notre offre complète dès aujourd'hui."
                            />
                            <Service />
                            <FreeQuote />
                        </main>
                        <Footer />
                    </>
                )}
            </Suspense>
        </div>
    );
};

export default Services;

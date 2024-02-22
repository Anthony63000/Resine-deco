import React, { useState, useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";

// Déplacez vos imports ici
import Header from "../components/Header/Header";
import BannerPages from "../components/BannerPages/BannerPages";
import Service from "../components/Service/Service";
import Footer from "../components/Footer/Footer";
import FreeQuote from "../components/FreeQuote/FreeQuote";
import ServiceModal from "../components/ServiceModal/ServiceModal";
import imageServives from "../images/banner/services.webp";

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
                                bannerImage={imageServives}
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

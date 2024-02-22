import React, { useState, useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";

const Header = React.lazy(() => import("../components/Header/Header"));
const BannerPages = React.lazy(() => import("../components/BannerPages/BannerPages"));
const Service = React.lazy(() => import("../components/Service/Service"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));
const FreeQuote = React.lazy(() => import("../components/FreeQuote/FreeQuote"));
const ServiceModal = React.lazy(() => import("../components/ServiceModal/ServiceModal"));

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
                                text="Découvrez dès maintenant notre large gamme de prestations 
                                    pour répondre à tous vos besoins ! Explorez notre offre complète dès aujourd'hui."
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

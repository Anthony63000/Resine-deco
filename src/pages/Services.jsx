import React, { useState, useEffect, Suspense } from "react";
import BannerPages from "../components/BannerPages/BannerPages";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import WorksInProgress from "../components/WorksInProgress/WorksInProgress";
import imageWorks from "../images/banner/travaux.webp";

const Services = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Remplacez cette valeur par la durée de chargement estimée de votre page
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app">
            <Suspense fallback={<Loader />}>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Header />
                        <main>
                            <BannerPages
                                bannerImage={imageWorks}
                                bannerImageAlt="Image d'un pavage à l'extérieur"
                                title="Nos réalisations"
                                text="Découvrez dès maintenant nos réalisations exceptionnelles, conçues pour répondre à vos besoins les plus exigeants"
                            />
                            <WorksInProgress />
                        </main>
                        <Footer />
                    </>
                )}
            </Suspense>
        </div>
    );
};

export default Services;

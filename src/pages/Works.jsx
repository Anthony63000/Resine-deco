import React, { useState, useEffect, Suspense } from "react";
import BannerPages from "../components/BannerPages/BannerPages";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import WorksInProgress from "../components/WorksInProgress/WorksInProgress";

import imageWorks from "../images/banner/travaux/travaux.webp";
import imageWorksL from "../images/banner/travaux/travauxL.webp";
import imageWorksM from "../images/banner/travaux/travauxM.webp";
import imageWorksS from "../images/banner/travaux/travauxS.webp";

import { Helmet } from "react-helmet";

const Works = () => {
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
                <Helmet>
                    <link rel="preload" href={imageWorks} as="image" />
                    <link rel="preload" href={imageWorksL} as="image" />
                    <link rel="preload" href={imageWorksM} as="image" />
                    <link rel="preload" href={imageWorksS} as="image" />
                </Helmet>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Header />
                        <main>
                            <BannerPages
                                bannerImage={`${imageWorks} 1440w, ${imageWorksL} 1024w, ${imageWorksM} 768w, ${imageWorksS} 425w`}
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

export default Works;

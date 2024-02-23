import React, { useState, useEffect, Suspense } from "react";
import Loader from "../components/Loader/Loader";

import ImageBannerContact from "../images/banner/contact/contact.webp"
import ImageBannerContactL from "../images/banner/contact/contactL.webp"
import ImageBannerContactM from "../images/banner/contact/contactM.webp"
import ImageBannerContactS from "../images/banner/contact/contactS.webp"

const Header = React.lazy(() => import("../components/Header/Header"));
const BannerPages = React.lazy(() => import("../components/BannerPages/BannerPages"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));
const ContactCompany = React.lazy(() => import("../components/ContactCompany/ContactCompany"));

const Contact = () => {
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
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Header />
                        <main>
                            <BannerPages 
                                bannerImage={`${ImageBannerContact} 1440w, ${ImageBannerContactL} 1024w, ${ImageBannerContactM} 768w, ${ImageBannerContactS} 425w`} 
                                bannerImageAlt="Image d'un téléphone, d'un casque de chantier, d'un mètre, des écouteurs et des crayons"
                                title="Contactez-nous"
                                text="Découvrez dès maintenant notre formulaire de contact pour rester en contact avec nous ! Exprimez vos questions, demandes ou commentaires et nous vous répondrons dans les plus brefs délais"
                            />
                            <ContactCompany />
                        </main>
                        <Footer />
                    </>
                )}
            </Suspense>
        </div>
    );
};

export default Contact;

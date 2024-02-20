import Header from "../components/Header/Header"
import BannerPages from "../components/BannerPages/BannerPages";
import Footer from "../components/Footer/Footer";

import ImageBannerContact from "../images/banner/contact.webp";
import ContactCompany from "../components/ContactCompany/ContactCompany";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const Contact = () => {

    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app">
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <Header/>
                    <main>
                        <BannerPages 
                        bannerImage={ImageBannerContact} 
                        bannerImageAlt="Image d'un téléphone, d'un casque de chantier, d'un mètre, des écouteurs et des crayons"
                        title="Contactez-nous"
                        text="Découvrez dès maintenant notre formulaire de contact pour rester en contact avec nous ! Exprimez vos questions, demandes ou commentaires et nous vous répondrons dans les plus brefs délais"
                        />
                        <ContactCompany />
                    </main>
                    <Footer/>
                </>
            )}
        </div>
    )
}

export default Contact
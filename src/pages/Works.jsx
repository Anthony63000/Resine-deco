import { useEffect, useState } from "react"
import BannerPages from "../components/BannerPages/BannerPages"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Loader from "../components/Loader/Loader"
import WorksInProgress from "../components/WorksInProgress/WorksInProgress"

import imageWorks from "../images/banner/travaux.webp"

const Works = () => {

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
                            bannerImage={imageWorks}
                            bannerImageAlt="Image d'un pavage à l'extérieur"
                            title="Nos réalisations"
                            text="Découvrez dès maintenant nos réalisations exceptionnelles, conçues pour répondre à vos besoins les plus exigeants"
                        />
                        <WorksInProgress/>
                    </main>
                    <Footer/> 
                </>
            )}
        </div>
    )
}

export default Works
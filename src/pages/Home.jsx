import React, { useState, useEffect, Suspense } from "react";
import Loader from "../components/Loader/Loader";

// Chargement dynamique des composants
const Header = React.lazy(() => import("../components/Header/Header"));
const BannerHome = React.lazy(() => import("../components/BannerHome/BannerHome"));
const AboutWork = React.lazy(() => import("../components/AboutWork/AboutWork"));
const Location = React.lazy(() => import("../components/Location/Location"));
const Unfolding = React.lazy(() => import("../components/Unfolding/Unfolding"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));

const Home = () => {
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
                            <BannerHome />
                            <AboutWork />
                            <Location />
                            <Unfolding />
                        </main>
                        <Footer />
                    </>
                )}
            </Suspense>
        </div>
    );
}; 

export default Home;

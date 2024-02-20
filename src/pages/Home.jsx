import { useEffect, useState } from "react";
import AboutWork from "../components/AboutWork/AboutWork";
import BannerHome from "../components/BannerHome/BannerHome";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Location from "../components/Location/Location";
import Unfolding from "../components/Unfolding/Unfolding";
import Loader from "../components/Loader/Loader";

const Home = () => {

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
        </div>
    );
}; 

export default Home;


import NavBar from "./NavBar"
import Logo from "../../images/Logo/LogoEntierSWhite.webp";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { switchHeader } from "../../redux/headerSlice/headerSlice";

import NavBarMobile from "./NavBarMobile";

const Header = () => {

    const headerState = useSelector(state => state.header.headerMode)
    const dispatch = useDispatch();
    const [animateHeader, setAnimateHeader] = useState(false)
    const [animateHeaderBis, setAnimateHeaderBis] = useState(false)

       // On surveille la largeur de l'écran pour afficher le burger pour le menu

       const [windowWidth, setWindowWidth] = useState(window.innerWidth)

       useEffect(() => {
           const handleResize = () => {
               setWindowWidth(window.innerWidth);
           };
   
           window.addEventListener('resize', handleResize);
   
           return () => {
               window.removeEventListener('resize', handleResize);
           };
       }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            if(currentPosition !== 0) {
                dispatch(switchHeader("action"))
            } else {
                dispatch(switchHeader("welcome"))
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    useEffect(() => {
        if(headerState === "welcome") {
            setAnimateHeader(true)
            setAnimateHeaderBis(false)
        } else {
            setAnimateHeader(false)
            setAnimateHeaderBis(true)  
        }
    }, [headerState])

    return (
        <header>
            {headerState === "welcome" && (
                <section className={`${"header"} ${animateHeader ? "header-animate" : ""}`}>
                    <div className="header-container">
                        <img 
                            src={Logo}
                            alt="Image du logo de l'entreprise Résine déco"
                            className="header-container-image" 
                        />
                        <h1 className="header-container-title">
                            Résine'Déco63
                        </h1>
                    </div>
                </section>
            )}
            {headerState === "action" && (
                <section className="headerBis">
                    <div className={`${"headerBis-content"} ${animateHeaderBis ? "headerBis-content-animate" : ""}`}>
                        <div className="headerBis-content-left">
                            <img
                                className="headerBis-content-left-image" 
                                src={Logo} 
                                alt="Image du logo de l'entreprise Résine déco" 
                            />
                            <h1 className="headerBis-content-left-title">
                                Resine'Deco63
                            </h1>
                        </div>
                        <div className="headerBis-content-right">
                            {windowWidth < 770 ? (
                                <NavBarMobile />
                            ) : (
                                <NavBar/>
                            )}
                        </div>
                    </div> 
                </section>
            )}
        </header>
    )
}

export default Header
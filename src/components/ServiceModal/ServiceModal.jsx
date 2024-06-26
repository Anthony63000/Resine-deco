import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CloseModal } from "../../redux/servicesSlice/servicesSlice";
import dataService from "../../data/dataServices.json";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ServiceModal = () => {
    const dispatch = useDispatch();
    const modalServiceMode = useSelector(state => state.service.modalServiceMode);
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const stateModal = useSelector(state => state.service.modalServiceIsOpen)

    const modalRef = useRef();

    useEffect(() => {
        const serviceIndex = dataService.dataService.findIndex(service => service.mode === modalServiceMode);
        if (serviceIndex !== -1) {
            setCurrentServiceIndex(serviceIndex);
        }
    }, [modalServiceMode]);

    const dataServiceSelected = dataService.dataService[currentServiceIndex];

    const toggleModal = () => {
        setCloseModalAnimate(true)
        const timer = setTimeout(() => {
            dispatch(CloseModal());
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    };

    const nextService = () => {
        setCloseModalAnimate(true);
        setTimeout(() => {
            setOpenModalAnimate(true);
            setCloseModalAnimate(false); 
            setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % dataService.dataService.length);
        }, 500);
    };
    
    const previousService = () => {
        setCloseModalAnimate(true);
        setTimeout(() => {
            setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + dataService.dataService.length) % dataService.dataService.length);
            setOpenModalAnimate(true);
            setCloseModalAnimate(false); 
        }, 500);
    };
    
    
    

    const previousDataService = dataService.dataService[(currentServiceIndex - 1 + dataService.dataService.length) % dataService.dataService.length];
    const nextDataService = dataService.dataService[(currentServiceIndex + 1) % dataService.dataService.length];

    // Animation Modal

    const [openModalAnimate, setOpenModalAnimate] = useState(false)
    const [closeModalAnimate, setCloseModalAnimate] = useState(false)

    useEffect(() => {
        if(stateModal) {
            setCloseModalAnimate(false)
            setOpenModalAnimate(true)
        }
    }, [stateModal])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setCloseModalAnimate(true)
                const timer = setTimeout(() => {
                    dispatch(CloseModal());
                }, 500)
                return () => {
                    clearTimeout(timer)
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch]);

    return (
        <section className="serviceModal">
            <div 
                ref={modalRef}
                className={`${"serviceModal-container"}
                ${openModalAnimate ? "serviceModal-container-open" : ""}
                ${closeModalAnimate ? "serviceModal-container-close" : ""}
                `}
            >
                <div className="serviceModal-container-top">
                    <h3 className="serviceModal-container-top-title">
                        {dataServiceSelected.title}
                    </h3>
                    <FontAwesomeIcon onClick={toggleModal} className="serviceModal-container-top-icon" icon={faTimes} />
                </div>
                <div className="serviceModal-container-middle">
                    <img 
                        src={`${process.env.PUBLIC_URL}${dataServiceSelected.bannerImage}`}
                        alt={dataServiceSelected.bannerImageAlt} 
                        className="serviceModal-container-middle-image"
                    />
                    <div onClick={previousService} className="serviceModal-container-middle-left">
                        <FontAwesomeIcon 
                            className="serviceModal-container-middle-icon" 
                            icon={faCircleChevronLeft}
                        />
                        <p className="serviceModal-container-middle-text">
                            {previousDataService.title}
                        </p>
                    </div>
                    <div onClick={nextService} className="serviceModal-container-middle-right">
                        <p className="serviceModal-container-middle-text">
                            {nextDataService.title}
                        </p>
                        <FontAwesomeIcon 
                            className="serviceModal-container-middle-icon" 
                            icon={faCircleChevronRight}
                        />
                    </div>
                </div>
                <div className="serviceModal-container-bottom">
                    <h4 className="serviceModal-container-bottom-title">
                        Description
                    </h4>
                    <p className="serviceModal-container-bottom-text">
                        {dataServiceSelected.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceModal;

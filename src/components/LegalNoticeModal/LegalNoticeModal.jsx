
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleModalLegal } from '../../redux/LegalNoticeSlice/legalNoticeSlice';

const LegalNoticeModal = () => {

    const dispatch = useDispatch()

    const toggleModalLegalNotice = () => {
        dispatch(toggleModalLegal())
    }

    return (
        <section className="legalNotice">
            <div className='legalNotice-container'>
                <div className="legalNotice-container-top">
                    <h2 className="legalNotice-container-top-title">
                        Mentions Légales
                    </h2>
                    <FontAwesomeIcon 
                        icon={faTimes} 
                        className='legalNotice-container-top-close'
                        onClick={toggleModalLegalNotice}
                    />
                </div>
            </div>
        </section>
    )
}

export default LegalNoticeModal
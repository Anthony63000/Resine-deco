
const Paragraphe = ({ title, text }) => {
    return (
        <div className="legalNotice-container-middle-container">
            <h3 className="legalNotice-container-middle-container-title">
                {title}
            </h3>
            <p className="legalNotice-container-middle-container-text">
                {text}
            </p>
        </div>
    )
}

export default Paragraphe
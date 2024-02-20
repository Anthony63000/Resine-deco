
const UnfoldingCard = ({
    unfoldingCardImage,
    unfoldingCardAltImage,
    title,
    description,
    number
}) => {
    return (
        <div className={`${"unfolding-middle-card"} ${`unfolding-middle-${number}`}`}>
            <img 
                className="unfolding-middle-card-image"
                src={unfoldingCardImage}
                alt={unfoldingCardAltImage} 
            />
            <h5 className="unfolding-middle-card-title">
                {title}
            </h5>
            <p className="unfolding-middle-card-description">
                {description}
            </p>
        </div>
    )
}

export default UnfoldingCard
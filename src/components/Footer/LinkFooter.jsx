import { Link } from "react-router-dom"

const LinkFooter = ({ linkTarget, link }) => {
    return (
        <Link to={linkTarget} className="footer-found-container-top-columns-link">
            {link}
        </Link>
    )
}

export default LinkFooter
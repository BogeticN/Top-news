import { Link } from "react-router-dom"

const ArticleThumbnail = ({ title, description, content, image }) => {

    const placeholder = 'https://via.placeholder.com/400x260'


    return (
        <>
            <div className="single-thumbnail "style={{ border: '1px solid black' }}>
                <p>{title}</p>
                <img src={image ? image : placeholder} alt="TopNewsImg"></img>
                <p>{description}</p>
                <Link to={{ pathname: `/article`, state: { title, content, image } }} >More</Link>
            </div>
        </>
    )
}

export default ArticleThumbnail
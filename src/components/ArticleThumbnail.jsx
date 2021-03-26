import { Link } from "react-router-dom"

const ArticleThumbnail = ({ title, description, content, image,classThumbnail }) => {

    const placeholder = 'https://via.placeholder.com/400x260'


    return (
        <>
            <div className={classThumbnail ? classThumbnail : 'single-thumbnail'}style={{ border: '1px solid black' }}>
                <p className='top-text'>{title}</p>
                <img src={image ? image : placeholder} alt="TopNewsImg"></img>
                {description ? <p className='bottom-text'>{description.substring(0,100)}...</p> : null}
                <Link to={{ pathname: `/article`, state: { title, content, image } }} >More</Link>
            </div>
        </>
    )
}

export default ArticleThumbnail
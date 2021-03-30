import { Link } from "react-router-dom"

const Article = (props) => {

    const placeholder = 'https://via.placeholder.com/400x260'


    // const { title } = useParams()

    // let article = topNews.find(news => news.title === title)
    // console.log(article)

    const { title, content, image } = props.location.state

    return (
        <div className='article-container'>
            <div className='article-content'>
                <h2>{title}</h2>
                <img src={image || placeholder} alt="TopNewsImage"></img>
                <p>{content}</p>
                <Link to='/'>Back to list</Link>
            </div>
        </div>
    )
}

export default Article
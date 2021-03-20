import { Link } from "react-router-dom"

const Article = (props) => {

    const placeholder = 'https://via.placeholder.com/400x260'


    // const { title } = useParams()

    // let article = topNews.find(news => news.title === title)
    // console.log(article)

    const { title, content, image } = props.location.state

    return (
        <>
            <div>
                <h1>{title}</h1>
                <img src={image || placeholder} alt="TopNewsImage"></img>
                <p>{content}</p>
            </div>
            <div>
                <Link to='/'>Back to list</Link>
            </div>
        </>
    )
}

export default Article
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getByCategory } from "../services"
import ArticleThumbnail from "./ArticleThumbnail"

const OneCategory = ({ country, category }) => {

    const [singleCategory, setSingleCategory] = useState([])
    const [selected, setSelected] = useState(0)
    const [toggle, setToggle] = useState(false)
    
    let classThumbnail='slide-thumbnail'

    useEffect(() => {
        getByCategory(country, category).then(res => {
            setSingleCategory(res.data.articles)
        })
    }, [category, country])

    let slicedNews = singleCategory.slice(0,)

    return (
        <>
            <Link to={{ pathname: `/allnewsfromcategory`, state: { category, singleCategory } }} ><h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3></Link>

            <button onClick={() => setToggle(prev => !prev)}>Show</button>

            {toggle ?
                <div style={{display:'flex'}}>
                    <button onClick={() => {
                        // eslint-disable-next-line
                        selected == false ?
                            setSelected(slicedNews.length - 1)
                            :
                            setSelected((selected - 1) % slicedNews.length)
                    }} >Previous</button>

                    {slicedNews.slice(selected , selected + 5).map(e => <ArticleThumbnail  classThumbnail={classThumbnail} key={e.title} title={e.title} content={e.content} image={e.urlToImage} />)}

                    <button onClick={() => setSelected((selected + 1) % slicedNews.length)}>Next</button>
                </div>
                :
                null
            }
        </>
    )
}

export default OneCategory
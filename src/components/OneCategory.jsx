import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getByCategory } from "../services"
import ArticleThumbnail from "./ArticleThumbnail"

const OneCategory = ({ country, category }) => {

    const [singleCategory, setSingleCategory] = useState([])
    const [selected, setSelected] = useState(0)
    const [toggle, setToggle] = useState(false)

    let classThumbnail = 'slide-thumbnail'

    useEffect(() => {
        getByCategory(country, category).then(res => {
            setSingleCategory(res.data.articles)
        })
    }, [category, country])

    let slicedNews = singleCategory.slice(0,)

    return (
        <>
            <div>
                <Link to={{ pathname: `/allnewsfromcategory`, state: { category, singleCategory, country } }} ><h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2></Link>
                <div className="form-check form-switch">
                    <input onChange={() => setToggle(prev => !prev)} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                </div>
                {toggle ?
                    <div className='slide-show'>
                        <i className="fa fa-angle-left fa-4x" onClick={() => {
                            // eslint-disable-next-line
                            selected == false ?
                                setSelected(slicedNews.length - 1)
                                :
                                setSelected((selected - 1) % slicedNews.length)
                        }}></i>
                        {slicedNews.slice(selected, selected + 4).map(e => <ArticleThumbnail classThumbnail={classThumbnail} key={e.title} title={e.title} content={e.content} image={e.urlToImage} />)}
                        <i className="fa fa-angle-right fa-4x" onClick={() => setSelected((selected + 4) % slicedNews.length)}></i>
                    </div>
                    :
                    null
                }
            </div>
        </>

    )
}

export default OneCategory
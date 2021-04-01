import { useEffect, useState } from "react"
import { getTopNews } from "../services"
import ArticleThumbnail from "./ArticleThumbnail"

const TopNews = ({ country }) => {

    const [topNews, setTopNews] = useState([])

    useEffect(() => {
        let mounted = true
        getTopNews(country).then(res => {
            if(mounted)
            setTopNews(res.data.articles)
        })
        return () => mounted = false
    }, [country])


    const placeholder = 'https://via.placeholder.com/400x260'


    return (
        <>
            {country === 'gb' ? <h1>Top news from Great Britain</h1> : <h1>Top news from United States</h1>}

            <div className="grid-thumbnails">
                {topNews.map(news => <ArticleThumbnail key={news.title} content={news.content} title={news.title} description={news.description} image={news.urlToImage ? news.urlToImage : placeholder} />)}
            </div>
        </>
    )
}

export default TopNews
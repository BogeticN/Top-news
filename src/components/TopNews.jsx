import { useEffect, useState } from "react"
import { getTopNews } from "../services"
import ArticleThumbnail from "./ArticleThumbnail"

const TopNews = ({ country }) => {

    const [topNews, setTopNews] = useState([])

    useEffect(() => {
        getTopNews(country).then(res => {
            setTopNews(res.data.articles)
        })

    }, [country])


    const placeholder = 'https://via.placeholder.com/400x260'


    return (
        <>
            {country === 'gb' ? <h1>Top news from Great Britain</h1> : <h1>Top news from United States</h1>}

            <div>
                {topNews.map(news => <ArticleThumbnail key={news.title} content={news.content} title={news.title} description={news.description} image={news.urlToImage ? news.urlToImage : placeholder} />)}
            </div>
        </>
    )
}

export default TopNews
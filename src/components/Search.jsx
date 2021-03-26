import { useEffect, useState } from "react"
import { getByCategory } from "../services"
import ArticleThumbnail from "./ArticleThumbnail"

const Search = ({ country }) => {

    const [searchInput, setSearchInput] = useState('')
    const [allNews, setAllNews] = useState([])

    let allCategories = ['business', 'sport', 'entertainment', 'health', 'general', 'science', 'technology']

    useEffect(() => {
        for (let i = 0; i < allCategories.length; i++) {
            getByCategory(country, allCategories[i]).then(res => {
                setAllNews(res.data.articles)
            })
        }
    }, [country])

    return (
        <div className='search-container'>
            {country === 'gb' ? <h1>Search top news from Great Britain by term:</h1> : <h1>Search top news from United States by term:</h1>}

            <input className='search-input' type="text" placeholder="Search..." onChange={(e) => setSearchInput(e.target.value)}></input>
            <div className="grid-thumbnails">
                {searchInput === '' ? null : allNews.filter(news => news.title.toLowerCase().includes(searchInput.toLowerCase())).map(news => <ArticleThumbnail key={news.title} title={news.title} description={news.description} content={news.content} image={news.urlToImage} />)}
            </div>
        </div>

    )
}

export default Search
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

    console.log(allNews)

    return (
        <>
            {country === 'gb' ? <h1>Search top news from Great Britain</h1> : <h1>Search top news from United States</h1>}

            <input type="text" placeholder="Search..." onChange={(e) => setSearchInput(e.target.value)}></input>
            
            {searchInput === '' ? null : allNews.filter(news => news.title.toLowerCase().includes(searchInput.toLowerCase())).map(news => <ArticleThumbnail key={news.title} title={news.title} description={news.description} content={news.content} image={news.urlToImage} />)}
        </>
    )
}

export default Search
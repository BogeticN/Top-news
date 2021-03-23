import ArticleThumbnail from "./ArticleThumbnail"

const AllNewsFromCategory = (props) => {

    const { category, singleCategory,country } = props.location.state

    return (
        <>
            <h1 className='category-title'>Top {category} news from {country.toUpperCase()} </h1>
            <div className='grid-thumbnails'>
                {singleCategory.map(e => <ArticleThumbnail key={e.title} content={e.content} title={e.title} description={e.description} image={e.urlToImage} />)}
            </div>
        </>
    )
}

export default AllNewsFromCategory
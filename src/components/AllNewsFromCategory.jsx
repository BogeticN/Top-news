import ArticleThumbnail from "./ArticleThumbnail"

const AllNewsFromCategory = (props) => {
    
    const { category, singleCategory } = props.location.state

    return (
        <>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            {singleCategory.map(e => <ArticleThumbnail key={e.title} content={e.content} title={e.title} description={e.description} image={e.urlToImage} />)}
        </>
    )
}

export default AllNewsFromCategory
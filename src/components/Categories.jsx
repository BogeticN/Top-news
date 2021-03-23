import OneCategory from "./OneCategory"


const Categories = ({ country }) => {


    return (
        <>
            <h1>Top 5 news by categories from {country.toUpperCase()}:</h1>
            <div className="categories">
                <OneCategory country={country} category={'business'} />
                <OneCategory country={country} category={'sport'} />
                <OneCategory country={country} category={'entertainment'} />
                <OneCategory country={country} category={'health'} />
                <OneCategory country={country} category={'general'} />
                <OneCategory country={country} category={'science'} />
                <OneCategory country={country} category={'technology'} />
            </div>
        </>
    )
}

export default Categories
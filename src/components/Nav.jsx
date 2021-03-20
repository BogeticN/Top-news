import { Link } from "react-router-dom"

const Nav = ({ setCountry }) => {
    return (
        <header>
            <nav >
                <Link style={{ padding: '5px' }} to='/'>Top News</Link>
                <Link style={{ padding: '5px' }} to='/categories'>Categories</Link>
                <Link style={{ padding: '5px' }} to='/search'>Search</Link>
                {/* <div> */}
                <button onClick={() => setCountry('gb')}>GB</button>
                <button onClick={() => setCountry('us')}>US</button>
                {/* </div> */}
            </nav>
        </header>
    )
}

export default Nav
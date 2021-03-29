import { useState } from "react"
import { Link } from "react-router-dom"


const Nav = ({ theme, setTheme, setCountry }) => {

    const [open, setOpen] = useState(false)
    return (
        <header>
            <nav>
                <button onClick={() => setOpen(!open)} className={open === false ? "hamburger hamburger--spin" : "hamburger hamburger--spin is-active"} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                {open ? <div className="test" style={{ visibility: 'visible' }}>
                    <Link style={{ padding: '10px' }} to='/'>Top News</Link>
                    <Link style={{ padding: '10px' }} to='/categories'>Categories</Link>
                    <Link style={{ padding: '10px' }} to='/search'>Search</Link>
                </div>
                    :
                    <div className="test" >
                        <Link style={{ padding: '10px' }} to='/'>Top News</Link>
                        <Link style={{ padding: '10px' }} to='/categories'>Categories</Link>
                        <Link style={{ padding: '10px' }} to='/search'>Search</Link>
                    </div>}

            </nav>
            <div className="country-buttons">
                <div className="form-check form-switch ">
                    <input onClick={() => {
                        setTheme(theme ? '' : '-dark')
                    }} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                </div>
                <button onClick={() => setCountry('gb')}>GB</button>
                <button onClick={() => setCountry('us')}>US</button>
            </div>
        </header>
    )
}

export default Nav
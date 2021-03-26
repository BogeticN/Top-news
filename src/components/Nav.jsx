import { useState } from "react"
import { Link } from "react-router-dom"

import styled from 'styled-components'

const StyledNav = styled.nav`
    @media (max-width:1000px){
        .test {
            transform:${({ open }) => open ? 'translateX(0)' : 'translate(100%)'}
        }
    }
`

const Nav = ({ setCountry }) => {

    const [open, setOpen] = useState(false)
    return (
        <header>
            {/* <nav style={{ transform:`${ open ? 'translateX(100px)' : 'translateX(0)'}`}}> */}
            <nav>
                <button onClick={() => setOpen(!open)} className={open === false ? "hamburger hamburger--spin" : "hamburger hamburger--spin is-active"} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className="test">
                    <Link style={{ padding: '10px' }} to='/'>Top News</Link>
                    <Link style={{ padding: '10px' }} to='/categories'>Categories</Link>
                    <Link style={{ padding: '10px' }} to='/search'>Search</Link>
                </div>
            </nav>
            <div className="country-buttons">
                <button onClick={() => setCountry('gb')}>GB</button>
                <button onClick={() => setCountry('us')}>US</button>
            </div>
        </header>
    )
}

export default Nav
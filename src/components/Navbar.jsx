import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>Home</li>
                <li>Customers</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            <ul className='side'>
                <li>$</li>
                <li>Welcome</li>
                <li>logout</li>
            </ul>
        </div>
    )
}

export default Navbar
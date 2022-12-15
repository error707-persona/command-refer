import React, {useState} from 'react'

const Navbar = () => {
    const [balance, setbalance] = useState(0)
    return (
        <div className='navbar'>
            <ul>
                <li>Home</li>
                <li>Customers</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            <ul className='side'>
                <li>$ {balance}</li>
                <li>Welcome</li>
                <li>logout</li>
            </ul>
        </div>
    )
}

export default Navbar
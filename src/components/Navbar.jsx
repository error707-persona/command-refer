import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'

const Navbar = () => {
    const user = useContext(UserContext);
    
    const handleLogout = () => {
        user.setuserid("");
        user.setlogStatus(!user.logStatus);
    }
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/customer">Customers</Link></li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            <ul className='side'>
                <li>$ {user.userid.balance}</li>
                <li>Welcome, {user.userid.name}</li>
                <li > <Button onClick={(e)=>handleLogout}>{(!user.logStatus)?"logout":"login"}</Button></li>
            </ul>
        </div>
    )
}

export default Navbar
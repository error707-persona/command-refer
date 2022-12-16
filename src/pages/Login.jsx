import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { Link } from 'react-router-dom';
const Login = () => {
  const user = useContext(UserContext);
  const [data, setdata] = useState([{
    title:"Title",
    tagline:"tagline",
    note:"Note"
}]);
useEffect(() => {
    axios
        .get(`http://localhost:9020/user`)
        .then(res => {
           
            setdata(res.data);
            
        })
        .catch(err => {
            console.log(err);
        })
}, [])
  return (
    <div>
    <table className="content-table">
    <thead>
      <tr>
        <th>Account no</th>
        <th>Name</th>
        <th>Email</th>
        <th>Bank Name</th>
        <th>Balance</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>

      {data.map((item)=>
      <tr>
        <td>{item.accountno}</td>
        <td>{item.name}</td>
        <td>{item.bank}</td>
        <td>{item.email}</td>
        <td>{item.balance}</td>
        <td><Link to="/transfer"><Button onClick={(e)=>user.setuserid({id:item._id, name:item.name, accountno:item.accountno, balance: item.balance})}>Login</Button></Link></td>
      </tr>
      )}
      
    </tbody>
  </table>
 
  </div>
  )
}

export default Login
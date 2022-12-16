import React, { useRef } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
const Tables = () => {
  const user = useContext(UserContext);
  const [amount, setamount] = useState(0)
  
   const [toggle, settoggle] = useState(false);
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

        const EditData = (id, balance) => {

          let data = null;
          console.log(id, balance)
          axios({
              method: 'post',
              url: `http://localhost:9020/edit`,
              headers: {},
              data: {
  
                  id: id,
                  balance: balance,
                  
              }
          }).then(res => {
              data = res.data;
              console.log("edit info", res.data)
          })
              .catch(err => {
                  console.log(err);
              })
     
      
      if (data) return data;
  }
  return (
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
        <td>
        <Button onClick={(e) => settoggle(!toggle)}>Transfer</Button>
        <Modal show={toggle}>
        <Modal.Header> Transfer </Modal.Header>
        <Modal.Body>
            <div className='headline'> 
            
            Amount : <input name="amount" onChange={(e)=>setamount(e.target.value)}></input></div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={(e)=> {EditData(user.userid.id, user.userid.balance-amount)
            
            }}>Pay</Button>
            <Button onClick={(e)=> settoggle(!toggle)}>Close</Button>
        </Modal.Footer>
        </Modal>
       </td>
      </tr>
      )}
      
    </tbody>
  </table>
  )
}

export default Tables
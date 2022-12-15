import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';

const Tables = () => {
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
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        }, [])
       
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
        <td><Button onClick={(e)=>settoggle(!toggle)}>Check Info</Button>
        <Button onClick={(e) => settoggle(!toggle)}>Transfer</Button>
        <Modal show={toggle}>
        <Modal.Header> Transfer </Modal.Header>
        <Modal.Body>
            Hi, react modal is here.
        </Modal.Body>
        <Modal.Footer>
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
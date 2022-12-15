import React from 'react'

const login = () => {
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
        <td><button>Check Info</button><button>Transfer</button></td>
      </tr>
      )}
      
    </tbody>
  </table>
 
  </div>
  )
}

export default login
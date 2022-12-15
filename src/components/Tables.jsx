import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const Tables = () => {
    
  return (
    <table class="content-table">
    <thead>
      <tr>
        <th>Account no</th>
        <th>Name</th>
        <th>Email</th>
        <th>Bank Name</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Domenic</td>
        <td>88,110</td>
        <td>dcode</td>
        <td><button>Check Info</button><button>Transfer</button></td>
      </tr>
      <tr class="active-row">
        <td>2</td>
        <td>Sally</td>
        <td>72,400</td>
        <td>Students</td>
        <td><button>Check Info</button><button>Transfer</button></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Nick</td>
        <td>52,300</td>
        <td>dcode</td>
        <td><button>Check Info</button><button>Transfer</button></td>
      </tr>
    </tbody>
  </table>
  )
}

export default Tables
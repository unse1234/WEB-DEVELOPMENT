import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
     const user = [
        {   id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        {   id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
        },
        {   id: 3,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com'
        },{
            id: 4,
            name: 'Bob Brown',
            email: 'bob.brown@example.com'
        }
    ]

  return (
    <div>
      <h1 className='text-6xl font-bold'>Users</h1>
       {user.map(u => (
  <Link key={u.id} to={`/users/${u.id}`}>
    <div className='border p-4 my-4 cursor-pointer hover:bg-gray-100'>
      <h2 className='text-2xl font-bold'>{u.name}</h2>
      <p className='text-lg'>{u.email}</p>
    </div>
  </Link>
))}
    </div>
  )
}

export default Users

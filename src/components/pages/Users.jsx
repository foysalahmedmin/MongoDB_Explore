import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UserTR from './UserTR';
import { FaUserPlus } from "react-icons/fa";

const Users = () => {
    const loadUsers = useLoaderData()
    const [users, setUsers] = useState(loadUsers)
    const deleteHandlerState = (id) => {
        const updateUsers = users.filter(user => user._id !== id);
        setUsers(updateUsers) 
    }
    return (
        <section className='py-10'>
            <div className="container">
                <div className='my-10'>
                    <Link to="/addUser" ><button className='px-10 py-3 bg-primary text-white font-bold flex items-center gap-3'><FaUserPlus /> Add User</button></Link>
                </div>
                <table className='w-full'>
                    <thead className='bg-primary text-white py-3'>
                        <tr className='py-3'>
                            <th className='py-3'>
                                ID
                            </th>
                            <th className='py-3'>
                                Name
                            </th>
                            <th className='py-3'>
                                Email
                            </th>
                            <th className='py-3'>
                                Gender
                            </th>
                            <th className='py-3'>
                                Status
                            </th>
                            <th className='py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            users?.map(user => <UserTR user={user} deleteHandlerState={deleteHandlerState}  key={user._id} />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Users;
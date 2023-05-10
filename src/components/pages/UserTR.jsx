import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserTR = ({ user, deleteHandlerState }) => {
    const { _id, name, email, password, gender, status } = user;
    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`,
                    {
                        method: "DELETE"
                    }
                )
                    .then(res => res.json())
                    .then(data => {
                        deleteHandlerState(id)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        console.log(data)
                    })

            }
        })
    }
    return (
        <tr className='border-b-2 border-primary'>
            <td className='py-3'>{_id}</td>
            <td className='py-3'>{name}</td>
            <td className='py-3'>{email}</td>
            <td className='py-3'>{gender}</td>
            <td className='py-3'>{status}</td>
            <td className='py-3'><Link to={`/editUser/${_id}`}><button className='shadow-md p-2 mx-1'><FaRegEdit /></button></Link> <button onClick={() => deleteHandler(_id)} className='shadow-md p-2 mx-1'><FaRegTrashAlt /></button></td>
        </tr>
    );
};

export default UserTR;
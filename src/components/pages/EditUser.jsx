import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiUsers } from "react-icons/hi";
import Swal from 'sweetalert2';

const EditUser = () => {
    const loadUser = useLoaderData()
    const [user, setUser] = useState(loadUser)
    const { name, email, password } = user;
    const editUserHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const password = form.password.value;
        const user = { name, email, password, gender, status }

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${loadUser._id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user),
                    }
                )
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire('Saved!', '', 'success')
                        form.reset()
                        setUser(user)
                        console.log(data)

                    })

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })


    }
    return (
        <section className='py-10'>
            <div className='container'>
                <div className='my-10'>
                    <Link to="/" ><button className='px-10 py-3 bg-primary text-white font-bold flex items-center gap-3'><HiUsers /> All Users</button></Link>
                </div>
                <div className='shadow-xl max-w-3xl mx-auto '>
                    <div className='text-center my-5'>
                        <h1 className='text-xl font-bold'>Update User</h1>
                        <p className='text-light_gray'>Use the below form to update user Information</p>
                    </div>
                    <form onSubmit={editUserHandler} className='py-10 px-5'>
                        <label className='text-light_gray' htmlFor="name">Name</label>
                        <input className='block w-full border mb-3 mt-2 p-1' type="text" name="name" id="name" defaultValue={name} />
                        <br />
                        <label className='text-light_gray' htmlFor="email">Email</label>
                        <input className='block w-full border mb-3 mt-2 p-1' type="email" name="email" id="email" defaultValue={email} />
                        <br />
                        <label className='text-light_gray' htmlFor="password" >Password</label>
                        <input className='block w-full border mb-3 mt-2 p-1' type="password" name="password" id="password" defaultValue={password} />
                        <div className='mb-3'>
                            <span className='text-light_gray mr-5' htmlFor="">Gender</span>
                            <label className='mr-5' htmlFor="male"><input type="radio" name="gender" id="male" value="male" /> Male</label>
                            <label className='mr-5' htmlFor="female"><input type="radio" name="gender" id="female" value="female" /> Female</label>
                            <label htmlFor="common"><input type="radio" name="gender" id="common" value="common" />  Common</label>
                        </div>
                        <div className='mb-3'>
                            <span className='text-light_gray mr-5' htmlFor="">Status</span>
                            <label className='mr-5' htmlFor="active"><input type="radio" name="status" id="active" value="active" /> Active</label>
                            <label htmlFor="inactive"><input type="radio" name="status" id="inactive" value="inactive" /> Inactive</label>
                        </div>
                        <br />
                        <input className='w-full text-white bg-primary py-3 font-bold' type="submit" value="Update User" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EditUser;
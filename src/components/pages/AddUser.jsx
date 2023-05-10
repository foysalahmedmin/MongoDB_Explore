import React from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const password = form.password.value;
        const user = { name, email, password, gender, status }

        console.log(user)

        fetch('http://localhost:5000/users',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        )
            .then(res => res.json())
            .then(data => {
                form.reset()
                console.log(data)

            })
    }
    return (
        <section className='py-10'>
            <div className='container'>
                <div className='my-10'>
                    <Link to= "/" ><button className='px-10 py-3 bg-primary text-white font-bold'>All Users</button></Link>
                </div>
                <div className='shadow-xl max-w-3xl mx-auto '>
                    <div className='text-center my-5'>
                        <h1 className='text-xl font-bold'>New User</h1>
                        <p className='text-light_gray'>Use the below form to create a new user</p>
                    </div>
                    <form onSubmit={addUserHandler} className='py-10 px-5'>
                        <label className='text-light_gray' htmlFor="name">Name</label>
                        <input className='block w-full border mb-3 mt-2 p-1' type="text" name="name" id="name" />
                        <br />
                        <label className='text-light_gray' htmlFor="email">Email</label>
                        <input className='block w-full border mb-3 mt-2 p-1' type="email" name="email" id="email" />
                        <br />
                        <label className='text-light_gray' htmlFor="password">Password</label>
                        <input className='block w-full border mb-3 mt-2 p-1' type="password" name="password" id="password" />
                        <div className='mb-3'>
                            <span className='text-light_gray mr-5' htmlFor="">Gender</span>
                            <label className='mr-5' htmlFor="active"><input type="radio" name="gender" id="male" value="male" /> Male</label>
                            <label className='mr-5' htmlFor="female"><input type="radio" name="gender" id="female" value="female" /> Female</label>
                            <label htmlFor="common"><input type="radio" name="gender" id="common" value="common" />  Common</label>
                        </div>
                        <div className='mb-3'>
                            <span className='text-light_gray mr-5' htmlFor="">Status</span>
                            <label className='mr-5' htmlFor="active"><input type="radio" name="status" id="active" value="active" /> Active</label>
                            <label htmlFor="inactive"><input type="radio" name="status" id="inactive" value="inactive" /> Inactive</label>
                        </div>
                        <br />
                        <input className='w-full text-white bg-primary py-3 font-bold' type="submit" value="Add User" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddUser;
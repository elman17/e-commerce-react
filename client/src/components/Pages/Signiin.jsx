import React, { useState } from 'react';
import Headerabout from '../Header/Headerabout';
import Footer from '../Footer/footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Face from '../../assets/Face.svg';

const initialUser = { password: '', email: '' };

const Signiin = () => {
    const [user, setUser] = useState(initialUser);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleUserChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };

    const handleSigniin = async (e) => {
        const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/auth/local/signiin`;
        try {
            if (user.email && user.password) {
                const { data } = await axios.post(url, {
                    identifier: user.email,
                    password: user.password,
                });
                if (data.jwt) {
                    console.log("Logged in successfully!");
                    setUser(initialUser);
                    navigate("/");
                } else {
                    setError("Login failed");
                }
            } else {
                setError("All fields are required");
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message && error.response.data.message.length > 0) {
                setError(`Login error: ${error.response.status} ${error.response.data.message[0].messages[0].message}`);
            } else {
                setError(`Login error: ${error.message}`);
            }
        }
    };


    return (
        <div>
            <Headerabout />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSigniin();
                }}
            >
                <div className='flex flex-col items-center mt-20 mb-28'>
                    <h1 className='text-5xl mb-16'>Welcome Back</h1>
                    <button className='bg-teal-700 rounded-md flex flex-row text-white w-96 h-14 items-center justify-center gap-2'>
                        <img src={Face} alt='Facebook' />
                        <p>Facebook</p>
                    </button>
                    <div className='flex flex-row items-center justify-center mt-6 mb-6 gap-3'>
                        <div className='bg-gray-100 w-28 h-1 flex items-center'></div>
                        <p>OR</p>
                        <div className='bg-gray-100 w-28 h-1 flex items-center'></div>
                    </div>
                    <div className='flex flex-col gap-2.5'>
                        <h2>Email address *</h2>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='example@gmail.com'
                            className='h-12 w-96 rounded-md pl-6 text-sm bg-gray-100 border border-gray-400'
                            onChange={handleUserChange}
                            value={user.email}
                        />
                    </div>
                    <div className='flex flex-col gap-2.5'>
                        <h2>Password *</h2>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='********'
                            className='h-12 w-96 rounded-md pl-6 text-sm bg-gray-100 border border-gray-400'
                            onChange={handleUserChange}
                            value={user.password}
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className='flex flex-col gap-2.5 items-center'>
                        <button className='bg-green-500 w-96 h-14 text-white rounded-md mt-6'>
                            Get Started
                        </button>
                        <p className='text-xs text-left text-gray-500 mt-6'>
                            By filling in the form above and clicking the “Get Started” button, you <br />
                            accept and agree to Terms of Service and Privacy Policy.
                        </p>
                        <p className='flex flex-row gap-2.5 text-lg font-semibold'>
                            Already have an account?
                            <span className='text-green-700'>
                                <Link to='/Signup'>Sign in</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default Signiin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headerabout from '../Header/Headerabout';
import Footer from '../Footer/footer';
import FacebookIcon from '../../assets/Face.svg';
import axios from 'axios';

const Signup = () => {
    const initialUser = { email: '', password: '', username: '' };
    const [user, setUser] = useState(initialUser);
    const navigateTo = useNavigate();

    const handleUserChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({ ...currentUser, [name]: value }));
    };

    const signUp = async () => {
        try {
            const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/auth/local/register`;

            if (user.username && user.email && user.password) {
                const res = await axios.post(url, user);
                if (!!res) {
                    setUser(initialUser);
                    navigateTo("/Signin");
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <Headerabout />
            <div className="flex flex-col gap-16 justify-center items-center mt-20 mb-32">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        signUp();
                    }}
                >
                    <div className="flex flex-col items-center text-center gap-4">
                        <p className="text-5xl font-semibold">Sign up for free</p>
                        <p className="text-lg">
                            Try everything free for 30 days, no payment details required
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-teal-700 rounded-md flex flex-row text-white w-96 h-14 items-center justify-center gap-2">
                            <img src={FacebookIcon} alt="Facebook" />
                            <p>Facebook</p>
                        </button>
                        <div className="flex flex-row items-center justify-center mt-6 gap-3">
                            <div className="bg-gray-100 w-28 h-1 flex items-center"></div>
                            <p>OR</p>
                            <div className="bg-gray-100 w-28 h-1 flex items-center"></div>
                        </div>
                        <div className="flex flex-col gap-6 mt-6 items-center">
                            <div className="flex flex-col gap-2.5">
                                <h2>Name *</h2>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Full Name"
                                    value={user.username}
                                    onChange={handleUserChange}
                                    className="h-12 w-96 rounded-md pl-6 text-sm bg-gray-100 border border-gray-400"
                                />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <h2>Email address *</h2>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={user.email}
                                    onChange={handleUserChange}
                                    className="h-12 w-96 rounded-md pl-6 text-sm bg-gray-100 border border-gray-400"
                                />
                            </div>
                            <div className="flex flex-col gap-2.5 items-center">
                                <div className="flex flex-col gap-2.5">
                                    <h2>Password *</h2>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={user.password}
                                        onChange={handleUserChange}
                                        className="h-12 w-96 rounded-md pl-6 text-sm bg-gray-100 border border-gray-400"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-green-500 w-96 h-14 text-white rounded-md mt-6"
                                >
                                    Get Started
                                </button>
                                <p className="text-xs text-left text-gray-500 mt-6">
                                    By filling in the form above and clicking the “Get Started”
                                    button, you accept and agree to Terms of Service and Privacy
                                    Policy.
                                </p>
                                <p className="flex flex-row gap-2.5 text-lg font-semibold">
                                    Already have an account?{' '}
                                    <span className="text-green-700">Sign in</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;

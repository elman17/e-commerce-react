import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userData } from '../../../Helper';

const Auth = () => {
    const navigate = useNavigate();

    const { jwt } = userData();
    const logout = () => {
        localStorage.setItem("user", "");
        navigate("/Signiin");
    };

    return (
        <div className="login flex flex-row justify-around gap-4 items-center">
            {!jwt ? (
                <>
                    <Link to="/Signup">
                        <button className="log">
                            Login
                        </button>
                    </Link>
                    <Link to="/Signiin">
                        <button className="bg-teal-700 rounded-md w-64 h-14 text-sm">
                            Become a member
                            <span>
                                ---
                            </span>
                        </button>
                    </Link>
                </>
            ) : (
                <button onClick={logout}>Logout</button>
            )}
        </div>
    );
};

export default Auth;

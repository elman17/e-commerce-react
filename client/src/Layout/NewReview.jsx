import React, { useState } from 'react';
import { Rate } from 'antd';
import { useParams } from 'react-router-dom';
import { userData } from '../Helper';
import { useDispatch } from 'react-redux';
import { addReview } from '../redux/actions/reducer/reviewsReducer';
import { instance } from '../components/api';

const NewReview = () => {
    const { id } = useParams();
    const [stars, setStars] = useState(0);
    const [text, setText] = useState("");
    const { user } = userData();
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const data = {
            stars,
            productID: id,
            text,
        };

        const createReview = async () => {
            try {
                await instance.post(`${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/reviews`, {
                    data: data
                })
            } catch (error) {
                console.log(error.message);
            }
        }

        createReview()

        dispatch(addReview(data));
        setText("");
        setStars(0);
    };

    return (
        <div className="w-3/4 mx-auto flex flex-col gap-7">
            <h3 className="text-lg font-semibold">Add a New Review</h3>
            <form onSubmit={(e) => { handleFormSubmit(e) }} className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600 mb-2">Stars:</label>
                    <Rate value={stars} onChange={setStars} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600 mb-2">Review:</label>
                    <textarea
                        className="border rounded-lg px-3 py-2 w-full"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-teal-700 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg self-start"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NewReview;



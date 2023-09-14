import React, { useEffect } from 'react';
import { Rate } from 'antd';
import { useParams } from 'react-router-dom';
import { getReviews } from '../redux/actions/review';
import { useDispatch, useSelector } from 'react-redux';
import NewReview from './NewReview';

const Review = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review);
    const reviewAttributes = review?.data || [];

    useEffect(() => {
        dispatch(getReviews(id));
    }, [dispatch, id]);

    const handleDelete = async (id) => {
        try {
            console.log(username);
            await axios.delete(`/api/reviews/${id}`);
            dispatch(deleteReview(id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3>Product Reviews</h3>

            {reviewAttributes?.map((item) => (
                <div key={item.id}>
                    <Rate defaultValue={item.sttributes?.stars} disabled />
                    <p>Description: {item.attrbutes?.username}</p>
                    <p>
                        { }
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </p>
                    { }
                    <button>Update</button>
                </div>
            ))}

            { }
            <NewReview productId={id} />
        </div>
    );
};

export default Review;


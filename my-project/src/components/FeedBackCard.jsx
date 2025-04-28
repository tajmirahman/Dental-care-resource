import React from 'react';

const FeedBackCard = ({data}) => {

    console.log(data)
    const {name,review,userImg}=data;
    
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <div className='flex justify-between items-center gap-3'>
                <img src={userImg} className='w-10 h-10 rounded-full' alt="" />
                <h2 className="card-title">{name}</h2>
                <p className='text-end'>{new Date().toLocaleDateString()}</p>
                </div>
                <p>{review}</p>
                <div className="card-actions justify-end">
                <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBackCard;
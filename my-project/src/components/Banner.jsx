import React from 'react';
import bannerImage from '../assets/banner-jpg.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[400px] p-2">

            <div className="flex justify-between items-center gap-3">
                <div className='w-[40%]'>
                <img
                    src={bannerImage}
                    
                    className="max-w-sm rounded-lg shadow-2xl w-full h-full" />
                </div>
                <div >
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
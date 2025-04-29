import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';



const Details = () => {

    const {description, treatment, image} = useLoaderData();



    return (
        <div
            className="hero  h-[300px] w-[80%] md:w-[900px] mx-auto mt-10"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div >
                    <h1 className="mb-5 text-5xl font-bold ">{treatment}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Appointment</button>
                </div>
            </div>

            <Modal treatment={treatment}></Modal>

        </div>
    );
};

export default Details;
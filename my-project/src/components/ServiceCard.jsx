import React from 'react';

const ServiceCard = ({ service }) => {
    console.log(service)
    const { description, cost, treatment, image } = service;
    return (
        <div className="card card-compact bg-base-100">
            <figure className='w-full h-40'>
                <img
                className='w-full h-40 object-cover'
                    src={image}
                    alt='' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{treatment}</h2>
                <div className='badge badge-secondary'>$ {cost}</div>
                <p title={description}>{description.slice(0,100)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Checkout More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
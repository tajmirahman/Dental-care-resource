import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { id,description, cost, treatment, image } = service;
    return (
        <div className="card card-compact bg-base-100">
            <figure className='w-full h-full'>
                <img className='w-full h-full object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{treatment}
                <div className='badge badge-secondary'>$ {cost}</div>
                </h2>
                
                <p title={description}>{description.slice(0,100)}...</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/details/${id}`}><button className="btn btn-primary">Checkout More</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
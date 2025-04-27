import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard';

const AllTreatment = () => {
    const data=useLoaderData();
    // const { treatment, description, cost, image } = data;
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mx-10 mt-6'>
            {
                data.map(service=> <ServiceCard service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllTreatment;
import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Home = () => {
    const services=useLoaderData();
   
    return (
        <div className='mx-10'>
            <Banner />
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2'>
                {
                    services.map(service=> <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import FeedBackCard from './FeedBackCard';


const Home = () => {
    const { serviceData, feedBackData } = useLoaderData();

    return (
        <div className='mx-10'>
            <Banner />
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mt-6'>
                {
                    serviceData.slice(0, 6).map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center my-6'>
                <NavLink to={'/treatment'}><button className='btn bg-sky-400'>Show More</button></NavLink>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2'>
                {
                    feedBackData.slice(0,3).map(data=> <FeedBackCard data={data}></FeedBackCard>)
                }
            </div>
        </div>
    );
};

export default Home;
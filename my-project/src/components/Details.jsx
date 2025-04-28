import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Details = () => {

    const singleData=useLoaderData();

    console.log(singleData)

    return (
        <div>

        </div>
    );
};

export default Details;
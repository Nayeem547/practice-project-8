import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Donate = () => {
    const params = useParams()
    console.log(params);

    const category = useLoaderData()
        console.log(category);
    

    return (
        <div>
           donating 
        </div>
    );
};

export default Donate;
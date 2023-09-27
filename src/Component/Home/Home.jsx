import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

     const category = useLoaderData();
     

    return (
        
        <div>
            <Banner></Banner>

          <div className=' flex justify-center ' >
          <Category category={category} ></Category>
          </div>
            
        </div>
    );
};

export default Home;
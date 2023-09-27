import React from 'react';

const Banner = () => {
    return (
        <div className=' space-y-5 h-[300px] items-center text-center flex flex-col justify-center  '>
           <h1 className=' text-3xl font-bold ' >I Grow By Helping People In Need</h1>
           <div>
           <input className=' px-8 border-none py-1 ' placeholder='Search here....' type="text"></input>
           <button className=' px-2 py-1 rounded-r-md bg-[#FF444A] text-white ' >Search</button>
           </div>
            
        </div>
    );
};

export default Banner;
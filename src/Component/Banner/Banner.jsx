import React, { useEffect, useState } from 'react';

const Banner = () => {

    // const [name, setName] = useState();

    // const handleSearch = e => {
    //       setName(e.target.value);
    // }
    


    return (
        <div>
        <div className=' space-y-5 h-[300px] items-center text-center flex flex-col justify-center  '>
           <h1 className=' text-3xl font-bold ' >I Grow By Helping People In Need</h1>
           <div>
           <input className=' pl-2 pr-16 border rounded-l-md border-[#DEDEDE] py-2 ' placeholder='Search here....' type="text"  value={name}
         ></input>
           {/* <button onClick={handleSearch} className=' px-2 py-2 rounded-r-md bg-[#FF444A] text-white ' >Search</button> */}
           </div>
           <ul>
        {/* {filteredData.map((item) => (
          <li key={item.id}>{item.card}</li>
        ))} */}
      </ul>
            
        </div>
          
          

        </div>
    );
};

export default Banner;
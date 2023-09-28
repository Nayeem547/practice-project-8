import React, { useEffect, useState } from 'react';
import CategoryCard from '../Category/CategoryCard';
import DonationCard from './donationCard';


const Donation = () => {
    const [donation, setDonation] = useState([]);

    const [isShow, setIsShow] = useState(false);


      const [noFound, setNoFound] = useState(false)


    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem("donation"));
        if(donateItem){
            setDonation(donateItem)
        }else{
         
         setNoFound('no data found')
        }
    },[]);
    return (
        <div>
        <div className=' flex justify-center ' >
           {noFound? <p className=' h-[80vh] flex justify-center text-3xl font-bold items-center ' >{noFound}</p> 
           : 
           <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center mt-7 gap-4  ' >
           {
             
             isShow ? donation.map( (card) => ( <DonationCard key={card.id} card={card} ></DonationCard> ) )
             : 
             donation.slice(0,4).map( (card) => ( <DonationCard key={card.id} card={card} ></DonationCard> ) )

           }
           
     
           
           </div>
          
            } 
           
          
        </div>
        <div className=' mt-5 mb-5 flex justify-center text-lg font-sm  ' >
                         { donation.length > 4 && <button  onClick={()=>setIsShow(!isShow) } className=" px-3 py-2 rounded text-white bg-[#009444] "  > {isShow? "See Less" : "See More" } </button> }
        </div>

        </div>
        
    );
};

export default Donation;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DonateCard from './DonateCard';


const Donate = () => {
    
      

    const [card, setCard] = useState({});

    const {id} = useParams();
    console.log(id);

    const category = useLoaderData();
        console.log(category);
        
        useEffect(()=> {
            
           const findCard = category?.find(card=>card.id == id);
           setCard(findCard);

        }, [id, category]);

    return (
        <div className='flex   justify-center' >
          <DonateCard  card={card} ></DonateCard>
           
        </div>
    );
};

export default Donate;
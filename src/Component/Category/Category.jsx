import React, {useState,useEffect} from 'react';
import CategoryCard from './CategoryCard';
import Banner from '../Banner/Banner';
import { driver } from 'localforage';
import { useLoaderData, useParams } from 'react-router-dom';


const Category = ({category }) => {

    // const [card, setCard] = useState({});

    // const {id} = useParams();
    // console.log(id);

    // const name = useLoaderData();
    //     console.log(name);
        
    //     useEffect(()=> {
            
    //        const filterCard = name?.filter(card=>card.id == id);
    //        setCard(filterCard);

    //     }, [id, name]);

    
    return (
        <div>

         
       

       
        <div className=' mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 ' >
        {
                category.map(card=> <CategoryCard key={card.id} card={card} ></CategoryCard> )

            }
        </div>

        </div>
    );
};


export default Category;
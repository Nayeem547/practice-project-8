import React from 'react';
import CategoryCard from './CategoryCard';


const Category = ({category}) => {
    console.log(category);
    return (
        <div className=' mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 ' >
        {
                category.map(card=> <CategoryCard key={card.id} card={card} ></CategoryCard> )

            }
        </div>
    );
};


export default Category;
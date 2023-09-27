import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({card}) => {
    const { id, picture, title, category,  text_button_bg, category_bg, card_bg,} = card || {}
    return (
        <Link to={`/category/${id}`} >
        <div>
            

            <div style={{ backgroundColor : card_bg }} className="card w-80 h-72 bg-base-100 shadow-xl ">
  <figure><img src={picture} alt="" /></figure>
  <div className=" card-body ">
  <div className='  flex justify-start  ' >
   <h2 style={ 
        {
            color: text_button_bg,
            backgroundColor : category_bg

        }
      } className="  card-title  px-3 py-1 text-sm ">{category}</h2>
   </div>
    <h2 style={{ color : text_button_bg }} className=' text-base font-semibold ' className=' text-base font-semibold ' >{title}</h2>
    
  </div>
</div>


        </div>

        </Link>
    );
};

export default CategoryCard;
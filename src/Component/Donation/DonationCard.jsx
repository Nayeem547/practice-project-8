import React from 'react';

const DonationCard = ({card}) => {


    const { id, donate_picture, picture, price, title, category,  text_button_bg, category_bg, card_bg,} = card || {}









    return (
        <div className=' flex justify-center   ' >
            <div style={{ backgroundColor : card_bg }} className=' rounded-md w-auto flex justify-center    ' >
            <div>
                <img src={donate_picture} alt="" />
            </div>
            <div className=' pl-4 space-y-1 md:space-y-3  lg:space-y-4 pt-4 ' >

             <div className=' flex pr-11 md:pr-24 lg:pr-64 ' >
             <h1 style={ { color: text_button_bg, backgroundColor : category_bg} }className="   items-center text-center px-2  py-1 text-sm rounded-sm " >{category}</h1>
             </div>
                <h1  className=' text-sm md:text-md lg:text-lg font-bold ' >{title}</h1>
                <p style={{ color : text_button_bg }} className=' font-semibold ' >{price}</p>
                <button style={{ backgroundColor : text_button_bg }}  className=' text-white px-3 py-1 text-sm rounded-sm ' >View Details</button>
            </div>
            </div>
        </div>
    );
};

export default DonationCard;




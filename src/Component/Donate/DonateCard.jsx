import React from 'react';
import './donate.css';

const DonateCard = ({card}) => {

    const {picture, description, price, text_button_bg, title } = card || {}

    return (
        <div className='  ' >
            
             <div className=' relative  ' >
             <img className='w-[1100px] h-[500px] object-cover rounded-md ' src={picture} alt="" />
            <div className=' ' >
            <button style={{ backgroundColor : text_button_bg }} className=' absolute boton  text-white px-3 py-2 rounded-sm text-md ' >Donate {price}</button>
                <div className='overla  object-cover ' ></div>
                
            </div>
            </div> 
            <div className=' space-y-4 mt-4 ' >
                <h1 className=' text-3xl font-bold  ' >{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DonateCard;
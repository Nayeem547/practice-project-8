import React from 'react';
import './donate.css';
import { json } from 'react-router-dom';
import swal from 'sweetalert';

const DonateCard = ({card}) => {

    const {id, picture, description, price, text_button_bg, title } = card || {};

    const handleDonate = () => {
        const addedDonateArray = [];

        const donateItem = JSON.parse(localStorage.getItem("donation"));

        if(!donateItem){
            addedDonateArray.push(card);
            localStorage.setItem("donation", JSON.stringify(addedDonateArray));
            swal("Good job!", "You clicked the button!", "success");

        } else{
            const isExits = donateItem.find((card) => card.id == id);

            if(!isExits){
                addedDonateArray.push(...donateItem, card);
                localStorage.setItem("donation", JSON.stringify(addedDonateArray));
                swal("Good job!", "You clicked the button!", "success");

            }else{
                swal("error!", "already donated!", "error");

            }
        }
    }

    return (
        <div className='  ' >
            
             <div className=' relative  ' >
             <img className='w-[1100px] h-[500px] object-cover rounded-md ' src={picture} alt="" />
            <div className=' ' >
            <button onClick={handleDonate} style={{ backgroundColor : text_button_bg }} className=' absolute boton  text-white px-3 py-2 rounded-sm text-md ' >Donate {price}</button>
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
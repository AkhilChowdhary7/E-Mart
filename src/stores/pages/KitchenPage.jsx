import React from 'react';
import {kitchenData} from '../data/kitchen'
import Navbar from '../components/Navbar'


const KitchenPage = () => {
    return (
    <>
        <div className='pageSection'>
          {kitchenData.map((item)=>{
             return(
               <div>
                 <div className='pageImg'>
                   <img src={item.image} />
                 </div>
                 <div className='proModel'>
                   {item.company},{item.model}
                 </div>
               </div>
             )
          })}
        </div>
    </>
    );
};

export default KitchenPage ;

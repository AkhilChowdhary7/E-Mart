import React from 'react';
import {mobileData} from '../data/mobiles'
import {useParams} from 'react-router-dom'

const MobileSingle = () => {

    const {id} = useParams()

    const product = mobileData.find((item)=>item.id===id);



    return (
        <>
            <div className='ind-section'>
              <div className='ind-image'>
                <img src={product.image}/>
              </div>
              <div className="ind-details space">
                <div className="ind-company">
                  <h2>{product.company}</h2>
                </div>
                <div className="ind-model space">
                  <h3>{product.model}</h3>
                </div>
                <div className="ind-price space">
                  <h2>{product.price}</h2>
                </div>
                <div className="ind-desc space">
                  <p>{product.description}</p>
                </div>
              <button>Add to Cart</button>
            </div>
           </div>
        </>
    );
};

export default MobileSingle;

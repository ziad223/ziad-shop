import React from 'react'
import Fdata from './Fdata'
import { FaStar , FaHeart, FaCartPlus   } from 'react-icons/fa'
import './featureProducts.css';
const FeatureProducts = ({addToWatchlist , addToCart}) => {
  return (
    <div className='featureProducts container'>
         <h1 className='title'>Feature Products</h1>
         <div className="feature-parent">
            {Fdata.map(function(item){
                return(
                    <div className='fproduct' key={item.id}>
                 <img src={item.image} alt="" />
                 <h2>{item.name}</h2>
                 <div className='fproduct-price'>
                <h3>${item.price}</h3>
                <h4>${item.prevPrice}</h4>
                 </div>
                 <div className="fproduct-icons">
                    <FaStar className='star-icon'/>
                    <FaStar className='star-icon'/>
                    <FaStar className='star-icon'/>
                    <FaStar className='star-icon'/>
                    <FaStar className='star-icon'/>
                 </div>
                 <div className="fproduct-control">
                <FaHeart className='fproduct-btn' onClick={() => addToWatchlist(item)}/>
                <FaCartPlus  className='fproduct-btn' onClick={() => addToCart(item)}/>
                 </div>
                    </div>
                )
            })}
         </div>
    </div>
  )
}

export default FeatureProducts

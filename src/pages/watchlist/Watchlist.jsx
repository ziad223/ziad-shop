import React from 'react'
import { FaCartPlus ,FaTimes  } from "react-icons/fa";
import './watchList.css';
const Watchlist = ({watchlist , addToCart , removeFromWatchList}) => {
  return (
     <div className='container'>
     {watchlist.length == 0 ?
     <h2 className='no-products'>No There Any Product in Watchlist</h2> 
     :
     <div className='watchlistt '>
     {watchlist.map(item =>{
         return(
             <div className='watchlist-product'>
                 <img src={item.image ? item.image : item.thumbnail} alt="" />
                 <h2>{item.name}</h2>
                 <h3>Price : ${item.price}</h3>
                 <div className='y'>
                     <button onClick={() =>addToCart(item)}><FaCartPlus className='btn-a'/></button>
                     <button onClick={() => removeFromWatchList(item)}><FaTimes className='btn-b'/></button>
                 </div>
             </div>
         )
     })}
 </div>
    }
     </div>
  )
}

export default Watchlist

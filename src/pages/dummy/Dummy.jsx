import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Dummy = ({addToCart , addToWatchlist}) => {

    let [products , setProducts] = useState([]);

    useEffect(function(){
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data =>{
        setProducts(data.products);
    })
    } , [])



  return (
    <div className='dummy container'>
        <div className="title">
      <h2>Dummy Products</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!
      </p>
      <div className="products">
        {products.map(function(product){
            return(
                <div className='product'>
             <Link to={`/dummyDetails/${product.id}`}>
             <img src={product.thumbnail} alt="" />
             </Link>
               <h3>{product.title.slice(0 , 20)}</h3>
               <div>
      <FaHeart className='dummy-icon' onClick={() => addToWatchlist(product)}/>
      <FaCartPlus className='dummy-icon' onClick={() =>addToCart(product)}/>
        </div>
                </div>
            )
        })}
      </div>
      </div>
    </div>
  )
}

export default Dummy

import React, { useEffect, useState } from 'react'
  import './fake.css'
  import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Fake = ({addToCart , addToWatchlist}) => {

    let [products , setProducts] = useState([]);
    
    useEffect(function(){
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
        })
    } , [])

  return (
    <div className='fake container'>
      <div className="title">
      <h2>Fake Products</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!
      </p>
      </div>
      <div className="products">
        {products.map(function(product){
       return(
        <div className='product'>
        <Link to={`/fakeDetails/${product.id}`} className='link'>
        <img src={product.image} alt="" />
        </Link>

        <h3>{product.title.slice(0 , 15)}</h3>
        <div>
      <FaHeart className='product-icon' onClick = {() =>addToWatchlist(product)}/>
      <FaCartPlus className='product-icon' onClick={() => addToCart(product)}/>
        </div>
        </div>
       )
        })}
      </div>

    </div>
  )
}

export default Fake

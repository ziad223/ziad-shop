import React from 'react'
import Header from '../components/header/Header';
import Services from '../components/services/Services';
import Categories from '../components/categories/Categories';
import FeatureProducts from '../components/featureProducts/FeatureProducts';
import Parthner from '../components/parthner/Parthner';
const Home = ({addToWatchlist , addToCart}) => {
  return (
    <div>
       <Header/>
         <Services/>
         <Categories/>
         <FeatureProducts addToWatchlist = {addToWatchlist} addToCart = {addToCart}/>
         <Parthner/>
    </div>
  )
}

export default Home

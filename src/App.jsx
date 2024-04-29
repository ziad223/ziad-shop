import React, { useState } from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about/About';
import Shop from './pages/Shop';
import Fake from './pages/fake/Fake';
import Dummy from './pages/dummy/Dummy';
import FakeDetails from './pages/fake/FakeDetails';
import DummyDetails from './pages/dummy/DummyDetails';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Watchlist from './pages/watchlist/Watchlist';
import Swal from 'sweetalert2';




  function App(){

    let [cartItems , setCartItems] = useState([]);
    let [watchlist , setWatchList] = useState([]);
    let [dark , setDark] = useState(false);
    
    function changeTheme(){
   setDark(!dark);
    }

    function addToCart(product){
      let selectedProduct = cartItems.find(item => item.id == product.id);
      
      if(selectedProduct){
       
        setCartItems(cartItems.map(item => item.id == product.id ? 
        {...selectedProduct , qty : selectedProduct.qty +1} :item
        ))

      }else{
        setCartItems([...cartItems , {...product , qty : 1}])
        Swal.fire({
          title: "This Product Already Added in The Cart Successfully",
          icon: "success",
          showConfirmButton : false,
          timer : 2000
        });
      }
     

    }

    function removeFromCart(product){
      setCartItems(cartItems.filter(item => item.id != product.id));
     Swal.fire({
      title: "This Product Already Removed From The Cart",
      icon: "success",
      showConfirmButton : false,
      timer : 2000
    });
    }

    function addToWatchlist(product){
        setWatchList([...watchlist , product]);
        Swal.fire({
          title: "This Product Already Added In The Watchlist",
          icon: "success",
          showConfirmButton : false,
          timer : 2000
        });
    }

    function removeFromWatchList(product){
    setWatchList(watchlist.filter(item => item.id != product.id))
    Swal.fire({
      title: "This Product Already Removed From The Watchlist",
      icon: "success",
      showConfirmButton : false,
      timer : 2000
    });
    }

    function decreaseProduct(product){
   let selectedProduct = cartItems.find(item => item.id == product.id);

   if(selectedProduct.qty == 1){
    setCartItems(cartItems.filter(item => item.id != product.id))
    Swal.fire({
      title: "This Product Already Removed From The Cart",
      icon: "success",
      showConfirmButton : false,
      timer : 2000
    });
   }else{
     setCartItems(cartItems.map(item => item.id == product.id ?
    {...selectedProduct , qty : selectedProduct.qty -1} : item
    ))
   }
    }


    return(
   <div className={dark ?  'app-dark' : 'app'}>

      <BrowserRouter>
      <Navbar cartItems = {cartItems} watchlist = {watchlist} dark = {dark} changeTheme = {changeTheme}/>
        <Routes>
         <Route path='/' element = {<Home addToWatchlist = {addToWatchlist} addToCart = {addToCart}/>}/>
         <Route path='/about' element = {<About/>}/>
         <Route path='/shop' element = {<Shop/>}/>
         <Route path='/contact' element = {<Contact/>}/>
         <Route path='/fake' element = {<Fake addToCart = {addToCart} addToWatchlist = {addToWatchlist}/>}/>
         <Route path='/dummy' element = {<Dummy addToCart ={addToCart} addToWatchlist = {addToWatchlist}/>}/>
         <Route path='/cart' element = {<Cart cartItems = {cartItems} removeFromCart = {removeFromCart} addToCart = {addToCart} decreaseProduct = {decreaseProduct}/>}/>
         <Route path='/fakeDetails/:id' element = {<FakeDetails addToCart = {addToCart}/>}/>
         <Route path='/dummyDetails/:id' element = {<DummyDetails addToCart = {addToCart}/>}/>
         <Route path='/watchlist' element = {<Watchlist watchlist = {watchlist} removeFromWatchList = {removeFromWatchList} addToCart = {addToCart}/>}/>
         </Routes>
         <Footer/>
      </BrowserRouter>
   </div>
    )
  }

  export default App;
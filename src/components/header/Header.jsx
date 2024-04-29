import React from 'react'
import './header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Header = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay : true,
        autoplaySpeed : 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='header container'>
      <Slider {...settings} className="header-left">
        <div className="header-left-man h">
          <div>
            <h2>Men Fashion</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos maxime minus libero hic consequatur enim. Nesciunt quas, assumenda repellendus eos sunt libero nam architecto illum accusamus harum beatae delectus!
            </p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="header-left-woman h">
          <div>
            <h2>Woman Fashion</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos maxime minus libero hic consequatur enim. Nesciunt quas, assumenda repellendus eos sunt libero nam architecto illum accusamus harum beatae delectus!
            </p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="header-left-kids h">
          <div>
            <h2>Kids Fashion</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quos maxime minus libero hic consequatur enim. Nesciunt quas, assumenda repellendus eos sunt libero nam architecto illum accusamus harum beatae delectus!
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </Slider>
      <div className="header-right">
        <div className="header-right-up m">
            <div>
                <h4>Save 20%</h4>
                <h2>Special Offer</h2>
                <button>Shop Now</button>
            </div>
            
        </div>
        <div className="header-right-down m">
            <div>
                <h4>Save 20%</h4>
                <h2>Special Offer</h2>
                <button>Shop Now</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Header

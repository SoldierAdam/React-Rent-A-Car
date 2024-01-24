import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Stil dosyanızı ekleyin

const ImageSlider = () => {
  const slides = [
    {
      image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_360,q_auto:best,w_640/v1/cms/uploads/ntka6cvwwl82vrabomrv'
    },
    {
      image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932803/d-volkswagen-troc_zsm1oa.png'
    },
    {
      image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932830/c-audi-a4_rrvniy.png'
    },
    {
      image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932853/e-bmw-5-serisi_mkaruk.png'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

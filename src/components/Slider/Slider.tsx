import React, { useState, useEffect } from 'react';
import './Slider.css';

type Slide = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};


const Slider = () => {


	const slides = [
    {
		title: 'Car Rental Deal 1',
		description: 'Special offer on this amazing car!',
    	image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_360,q_auto:best,w_640/v1/cms/uploads/ntka6cvwwl82vrabomrv',
		text: 'Luxury Cars for Rent',
		link: ""
	},
    {
		title: 'Car Rental Deal 1',
		description: 'Special offer on this amazing car!',
		image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932803/d-volkswagen-troc_zsm1oa.png',
		text: 'Luxury Cars for Rent',
		link: ""
	},
	{
    },
    {
		title: 'Car Rental Deal 1',
		description: 'Special offer on this amazing car!',
		image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932830/c-audi-a4_rrvniy.png',
		text: 'Luxury Cars for Rent',
		link: ""
    },
    {
		title: 'Car Rental Deal 1',
		description: 'Special offer on this amazing car!',
		image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932853/e-bmw-5-serisi_mkaruk.png',
		text: 'Luxury Cars for Rent',
		link: ""
    }
  ];


	const [currentSlide, setCurrentSlide] = useState(0);

	const goToSlide = (slideIndex: number) => {
    	setCurrentSlide(slideIndex);
	};

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <a href={slide.link} className="slide-link">Learn More</a>
          </div>
        </div>
      ))}
      <div className="slider-arrows">
        <button onClick={() => goToSlide(currentSlide - 1)}>&lt;</button>
        <button onClick={() => goToSlide(currentSlide + 1)}>&gt;</button>
      </div>
    </div>
  );
};

export default Slider;


// import React, { useState } from 'react';

// interface Slide {
//   imageUrl: string;
//   text: string;
// }

//   const slides = [
//     {
//     	image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_360,q_auto:best,w_640/v1/cms/uploads/ntka6cvwwl82vrabomrv',
// 		text: 'Luxury Cars for Rent'
// 	},
//     {
//       image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932803/d-volkswagen-troc_zsm1oa.png',
// 	  text: 'Luxury Cars for Rent'
//     },
//     {
//       image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932830/c-audi-a4_rrvniy.png',
// 	  text: 'Luxury Cars for Rent'
//     },
//     {
//       image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932853/e-bmw-5-serisi_mkaruk.png',
// 	  text: 'Luxury Cars for Rent'
//     }
//   ];

// const ImageSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
//   };

//   return (
//     <div className="slider">
//       {slides.map((slide, index) => (
//         <div
//           className={index === currentSlide ? 'slide active' : 'slide'}
//           key={index}
//         >
//           {index === currentSlide && (
//             <>
//               <img src={slide.image} alt={`Slide ${index}`} />
//               <p>{slide.text}</p>
//             </>
//           )}
//         </div>
//       ))}
//       <button onClick={prevSlide}>Previous</button>
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// };

// export default ImageSlider;



// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Slider.css'; // Stil dosyanızı ekleyin

// const ImageSlider = () => {
//   const slides = [
//     {
//       image: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_360,q_auto:best,w_640/v1/cms/uploads/ntka6cvwwl82vrabomrv'
//     },
//     {
//       image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932803/d-volkswagen-troc_zsm1oa.png'
//     },
//     {
//       image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932830/c-audi-a4_rrvniy.png'
//     },
//     {
//       image: 'https://res.cloudinary.com/drm4vgrjd/image/upload/v1705932853/e-bmw-5-serisi_mkaruk.png'
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="slide">
//             <img src={slide.image} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;



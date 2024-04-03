import React, { useState } from "react";
import { motion } from "framer-motion";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const slides = [
    [
      {
        image:
          "https://plus.unsplash.com/premium_photo-1705091981490-cf19b2167faf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        link: "https://",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1705091981490-cf19b2167faf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        link: "https://",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1705091981490-cf19b2167faf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
        link: "https://",
      },
    ],

    [
      {
        image:
          "https://images.unsplash.com/photo-1711126056288-da66a36bed7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
        link: "https://",
      },
      {
        image:
          "https://images.unsplash.com/photo-1711126056288-da66a36bed7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
        link: "https://",
      },
      {
        image:
          "https://images.unsplash.com/photo-1711126056288-da66a36bed7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
        link: "https://",
      },
    ],

    [
      {
        image:
          "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        link: "https://",
      },
      {
        image:
          "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        link: "https://",
      },
      {
        image:
          "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        link: "https://",
      },
    ],
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="overflow-hidden relative">
      <div className="absolute top-[50%] w-[100vw] flex justify-between px-[3vw] text-[4vw]">
        <button onClick={prevSlide} className=" z-10">
        <GrPrevious />
        </button>
        <button onClick={nextSlide} className=" z-10">
        <GrNext />
        </button>
      </div>
      <motion.div
        className="h-[55vh] flex shrink-0 flex-nowrap relative"
        style={{
          width: `${totalSlides * 100}vw`,
          transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
        }}
        // animate={{
        //   transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
        // }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {slides.map((slide, index) => (
          <div
          key={index}
          className="w-full h-full flex justify-around items-center"
        >
          {slide.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ boxShadow: "0_20px_50px_rgba(8,_112,_184,_0.7)", scale: 1.01 }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-[30vw] h-[50vh] object-cover hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                />
              </a>
            </motion.div>
          ))}
        </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;

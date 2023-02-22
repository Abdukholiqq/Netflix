import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"; 
import "swiper/css/navigation";
import "./swiper.css";
// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper";
import { BaseUrl } from "./BaseUrl";
import { Link } from "react-router-dom";
import EventsLoader from "../Components/Loader";

export default function Slider({select}) { 
  const [data, setData] = useState([]);
     const [loading, setLoading] = useState(false);
  useEffect(() => { 
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=873400dd977810e70390e633a4d42b3d&language=en-US&page=${select}`)
      .then((res) => res.json())
      .then((res) =>{ 
         setLoading(false)
           setData(res)});
  }, [select]);

     if (loading) {
       return (
         <div className="d-flex container flex-wrap">
           <EventsLoader />
           <EventsLoader />
           <EventsLoader />
           <EventsLoader />
           <EventsLoader />
           <EventsLoader />
         </div>
       );
     }


  return (
    <div className="container">
      <div className="sliderr ">
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          freeMode={true}
          loop={true}
          navigation={true}
          autoplay={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className="mySwiper">
          {data?.results?.map((item,i) => {
              
            return (
              <SwiperSlide key={i}>
                <Link to={`/movies/${item.id}`}>
                  <div className="bg-secondary d-flex flex-column gap-1 justify-content-between border rounded-4 border-0">
                    <img
                      className="w-100 border rounded-4 border-0"
                      style={{ minHeight: "380px", maxHeight: "380px" }}
                      src={BaseUrl + item.poster_path}
                      alt="movie images"
                    />
                    <h6 className="text-white fs-6 text-decoration-none">
                      {item.title}
                    </h6>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
} 
import React, { useEffect, useState } from "react";
import Banner from '../components/Banner'

import Card from "../components/Card";
import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar } from "swiper";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const [popular, setPopular] = useState([]);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  function getAllPages(page: number) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=c0cf889b8d4bcdc45ffc8742122630d5&language=en-US&page=${page.toString()}`,
      )
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => console.log(err));
  }

//   const getApi = async(movieId : number) => {
//     await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?&api_key=${
//          import.meta.env.VITE_KEY
//        }`)
//        .then((res) => {
//          setData(res.data)
//          console.log(res.data);
//        })
//        .catch(err => console.log(err));
//  }
  // function getPopular(){
  //     axios.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=c0cf889b8d4bcdc45ffc8742122630d5')
  //     .then((res) => {
  //         setPopular(res.data.results)
  //     })
  //     .catch(err =>  console.log(err));
  // }


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${
          import.meta.env.VITE_KEY
        }`,
      )
      .then((res) => {
        setPopular(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  function nextPage() {
    setCount(count + 1);
    getAllPages(count);
  }
  function prevPage() {
    setCount(count - 1);
    getAllPages(count);
  }

  return (
    <>
      <div className="flex">
        <Banner />
        {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-[250px]"
          >

            {popular.map((item: any) => {
                console.log();
                
              return (
                <SwiperSlide className="" >
                  <img className="h-96 w-full"
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper> */}
      </div>
      <div
        className={`grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 ml-4 xl:p-auto 2xl:grid-cols-5 md:p-5 lg:p-6 cursor-pointer h-auto"
          }`}
      >
        {popular.map((items: any, index) => {
          return (
            <Card
            key={index}
              img={items.poster_path}
              onClick={() => navigate(`/detail/${items.id}`, {
                state: {
                  id: items.id,
                }})}
            />
          );
        })}
      </div>

      {/* <div
          className={`grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 ml-4 xl:p-auto 2xl:grid-cols-5 md:p-5 lg:p-6 cursor-pointer h-auto "
          }`}
        >
          {data.map((items: any, index) => {
            return (
              <Card 
              id={items.id}
                key={index}
                title={items.title}
                poster_path={items.poster_path}
                overview={items.overview}
              />
            );
          })}
        </div> */}
      {/* 
        <div className="btn-group flex justify-center">
          <button className="btn" onClick={() => prevPage()}>
            «
          </button>
          <button className="btn">{count}</button>
          <button className="btn" onClick={() => nextPage()}>
            »
          </button>
        </div> */}
    </>
  );
};

export default Home;

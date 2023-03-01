import React from "react";

import { useSelector } from "react-redux";
import { FavoriteState } from "../features/favoriteSlice";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const img = "https://image.tmdb.org/t/p/w500";
export default function Favovites() {
  const navigate = useNavigate();

  const favorite = useSelector(
    (state: { favorite: FavoriteState }) => state.favorite,
  );
  return (
    <>
      <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 ml-4 xl:p-auto 2xl:grid-cols-5 md:p-5 lg:p-6 cursor-pointer h-auto gap-5 rounded-md h-screen">
        {favorite.items.map((item) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg dark:text-white">
              <img
                className="w-full rounded-md"
                src={img + item.poster_path}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2 text-black dark:text-white">{item.title}</div>
                <h4 className="font-semibold text-black dark:text-white mb-2">Release : {item.release_date}</h4>
                <p className="text-gray-700 text-base dark:text-white">{item.overview}</p>
              </div>
              <button className="btn flex justify-center ml-14 mt-8  text-white dark:bg-green-500" onClick={() => navigate('/')}>Back to home to remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

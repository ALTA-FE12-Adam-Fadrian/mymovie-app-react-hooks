import React,{ FC } from "react";

interface Props {
  img: string;
  onClick?: React.MouseEventHandler;
}

const IMG_URL = "https://image.tmdb.org/t/p/w500"
const Card:FC<Props> = ({img, onClick}) => {
  return (
    <div
        className=" mb-10 h-auto mx-auto cursor-pointer w-full xl:w-[280px] 2xl:w-[300px] shadow-md rounded-2xl"
        onClick={onClick ? onClick : () => {}}
      >
        <img
          className="rounded-2xl hover:rounded-1xl duration-100 hover:scale-125 image-full"
          src={IMG_URL + img}
        />
    </div>
    );
};

export default Card;

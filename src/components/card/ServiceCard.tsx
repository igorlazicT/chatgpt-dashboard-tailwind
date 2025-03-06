import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import clsx from "clsx";
import Card from "components/card";
import { MdHome } from "react-icons/md";
import "./card.css";

const ServiceCard = (props: {
  image: string;
  title: string;
  author: string;
  list: string[];
  download?: string;
  extra?: string;
  bgColor: string;
  icon: JSX.Element;
}) => {
  const { title, author, image, list, extra, bgColor, icon } = props;
  const [heart, setHeart] = useState(true);
  return (
    <Card extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] ${extra}`}>
      <div className={`${bgColor} h-full w-full`}>
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-md 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={() => setHeart(!heart)}
            className="absolute right-3 top-3 flex items-center justify-center rounded-md bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-md text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? (
                <IoHeartOutline />
              ) : (
                <IoHeart className="text-brand-500" />
              )}
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center px-1 ">
          <div>{icon}</div>
          <div className="mb-2">
            <p className="text-lg font-bold text-white dark:text-white">
              {title}
            </p>
            <p className="mt-1 text-sm font-medium text-white md:mt-2">
              By {author}
            </p>
          </div>

          {/* <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#E0E5F2] text-xs text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
              +5
            </span>
            {bidders.map((avt, key) => (
              <span
                key={key}
                className="z-10 -mr-3 h-8 w-8 rounded-full border border-white dark:!border-navy-800"
              >
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={avt}
                  alt=""
                />
              </span>
            ))}
          </div> */}
        </div>
        <div className="ml-8">
          <ul>
            {list.map((item, key) => (
              <li style={{ listStyleType: "disc" }}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex w-full items-center">
          {/* <div className="flex">
            <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
              Current Bid: {price} <span>ETH</span>
            </p>
          </div> */}
          <button className="linear w-full  bg-blue-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
            Create
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;

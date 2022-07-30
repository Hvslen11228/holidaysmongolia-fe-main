import React, { FC } from "react";
import GallerySlider from "components/GallerySlider/GallerySlider";
import { DEMO_EXPERIENCES_LISTINGS } from "data/listings";
import { ExperiencesDataType } from "data/types";
import StartRating from "components/StartRating/StartRating";
import { Link } from "react-router-dom";
import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon";
import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge";
import Badge from "shared/Badge/Badge";
import Avatar from "shared/Avatar/Avatar";

export interface ExperiencesCardHProps {
  className?: string;
  data?: ExperiencesDataType;
}

const DEMO_DATA: any = {
  id: "qtqTeTgOp",
  name: "ТЭМЭЭН ДЭЭРЭЭС НАРАН ОЙРХОН",
  name_en: "CLOSE TO THE SUN ON THE CAMEL",
  href: "../detail/qtqTeTgOp",
  cat_id: "djIHIdlCP",
  authorId: "eGYlI0Mz9",
  date: "2023-06-30",
  listingCategoryId: "djIHIdlCP",
  featuredImage:
    "https://api.holidaysmongolia.com/image/_1654443652985_small_84558907_3076696615697094_1171280754630459392_o_5b05a838ae.jpg",
  commentCount: null,
  viewCount: "1",
  like: "1",
  address: "Mongolia , Umnugobi",
  reviewStart: "5",
  reviewCount: "10",
  price: "$800",
  maxGuests: "32",
  bedrooms: null,
  bathrooms: null,
  saleOff: null,
  isAds: null,
  tourcol: null,
  map: {
    lat: 55.2094559,
    lng: 61.5594641,
  },
  amount_0: 800,
  amount_1: 800,
  amount_2: 100,
  about:
    "ТЭМЭЭН ДЭЭРЭЭС НАРАН ОЙРХОН - Шууд нислэгтэй говийн аялалдаа та бүхнийг урьж байна. \n\nУудам говиор аялан, Монгол орны үзэсгэлэнт газруудыг өөрийн нүдээр харан бишрэх алдаж болохгүй алтан боломж. ",
  galleryImgs: [
    "https://api.holidaysmongolia.com/image/_1654443454356_small_84692431_3076697699030319_367087418815283200_o_a606aa4a07.jpg",
    "https://api.holidaysmongolia.com/image/_1654855116885_14.PNG",
    "https://api.holidaysmongolia.com/image/_1654443454356_small_84558907_3076696615697094_1171280754630459392_o_5b05a838ae.jpg",
    "https://api.holidaysmongolia.com/image/_1654443454356_small_53317824_630538327391039_179580163263037440_n_6cd8013501.jpg",
    "https://api.holidaysmongolia.com/image/_1654443454356_small_280758494_5127093667339062_5133036437014901231_n_35aa92a077.jpg",
    "https://api.holidaysmongolia.com/image/_1654443454356_small_80194504_609677649837778_2227849662998511616_n_40b520bb01.jpg",
    "https://api.holidaysmongolia.com/image/_1654443454356_small_79714525_470498057210369_601623032955404288_n_2238d8d1c3.jpg",
    "https://api.holidaysmongolia.com/image/_1654855116885_15.PNG",
  ],
  author: {
    id: "eGYlI0Mz9",
    firstName: "Буянтогтох",
    lastName: "Алтан-очир",
    displayName: "Developer",
    email: "me@togtokh.dev",
    gender: "Bigender",
    authorscol: null,
    avatar:
      "https://scontent.fuln8-1.fna.fbcdn.net/v/t1.6435-9/73482827_432973574269232_6959572191918686208_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=thwE92042pUAX_bpQZW&_nc_ht=scontent.fuln8-1.fna&oh=00_AT9KMMk1Dw3ZWnqmZ69VWk59De871tO6QYXl3NMl5yKtWA&oe=62BCE509",
    bgImage:
      "https://scontent.fuln8-1.fna.fbcdn.net/v/t1.6435-9/159095329_806581300241789_9102292864480646709_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ITKvFjC3BmIAX8mz09I&_nc_oc=AQlvO7_9l4F4tPJimpKpjn9PVEH35ooocMT0DA6ZPFuWDa7kxDQ3B9Py2KE16dF1-Yg&tn=JGFYtEM8mlsNqXKp&_nc_ht=scontent.fuln8-1.fna&oh=00_AT_R-bWNZ_rHQJI8FXDHXU3-JlD4L0rGJRtiKMuWtJoBgQ&oe=62B967FC",
    count: 30,
    href: "../author/eGYlI0Mz9",
    desc: "developer test",
    jobName: "dev",
    authorscol1: "1",
    password: null,
  },
  listingCategory: {
    id: "djIHIdlCP",
    href: "../listing/djIHIdlCP",
    name: "Дотоод аялал",
    name_en: "Inbound Travel",
    thumbnail:
      "https://api.holidaysmongolia.com/image/_1654443135314_2_4e4d2d2684.jpg",
    count: 30,
    taxonomy: "category",
    stay: "listingType",
  },
};
const ExperiencesCardH: FC<ExperiencesCardHProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  const {
    galleryImgs,
    address,
    name,
    href,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    author,
    maxGuests,
    about,
    id,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full md:w-72 flex-shrink-0 overflow-hidden">
        <GallerySlider
          ratioClass="aspect-w-12 aspect-h-9 md:aspect-h-11"
          galleryImgs={galleryImgs}
          uniqueID={`ExperiencesCardH_${id}`}
        />
        <BtnLikeIcon isLiked={like} className="absolute right-3 top-3" />

        {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="flex-grow p-3 sm:p-5 flex flex-col">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            {isAds && <Badge name="ADS" color="green" />}
            <h2 className="text-lg font-medium capitalize">
              <span className="line-clamp-1">{name}</span>
            </h2>
          </div>
          <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
            <StartRating reviewCount={reviewCount} point={reviewStart} />
            <span>· </span>
            <div className="flex items-center">
              <span className="hidden sm:inline-block  text-base">
                <i className="las la-map-marked"></i>
              </span>
              <span className="sm:ml-2"> {address}</span>
            </div>
          </div>
        </div>
        {/* <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div> */}
        <div className="hidden sm:block text-sm text-neutral-500 dark:text-neutral-400 mt-4">
          <span className="line-clamp-2">{about}</span>
        </div>
        <div className="flex items-center space-x-8 mt-4  ">
          <div className="flex items-center space-x-2">
            <i className="las la-user text-lg"></i>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {maxGuests}
            </span>
          </div>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
        <div className="flex justify-between items-end">
          <div className="flex items-center space-x-3 text-sm text-neutral-700  dark:text-neutral-300">
            <Avatar imgUrl={author.avatar} userName={author.displayName} />
            <span className="hidden sm:inline-block">
              <span className="hidden sm:inline">Hosted by</span>{" "}
              {author.displayName}
            </span>
          </div>
          <span className="text-base font-semibold text-secondary-700">
            {price}
            {` `}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-ExperiencesCardH group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="ExperiencesCardH"
    >
      <Link to={href} className="md:flex md:flex-row">
        {renderSliderGallery()}
        {renderContent()}
      </Link>
    </div>
  );
};

export default ExperiencesCardH;

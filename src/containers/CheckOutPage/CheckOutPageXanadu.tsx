import { Tab } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/outline";
import React, { FC, Fragment, useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import visaPng from "images/vis.png";
import mastercardPng from "images/mastercard.svg";
import Input from "shared/Input/Input";
import Label from "components/Label/Label";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import NcImage from "shared/NcImage/NcImage";
import StartRating from "components/StartRating/StartRating";
import NcModal from "shared/NcModal/NcModal";
import ModalSelectDate from "components/ModalSelectDate";
import moment from "moment";
import { DateRage } from "components/HeroSearchForm/StaySearchForm";
import converSelectedDateToString from "utils/converSelectedDateToString";
import ModalSelectGuests from "components/ModalSelectGuests";
import { GuestsObject } from "components/HeroSearchForm2Mobile/GuestsInput";
import axios from "../../axios";
import AuthContext from "context/AuthContext";
export interface CheckOutPageProps {
  className?: string;
}
type QuizParams = {
  id: string;
};
const CheckOutPage: FC<CheckOutPageProps> = ({ className = "" }) => {
  const { id } = useParams<QuizParams>();
  const auth: any = useContext(AuthContext);
  const [data, setdata] = useState<any>([]);
  const [pay, setpay] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const api_ = await axios.get(`/order/${id}/xanadu/order/`);
      setdata(api_?.data?.data);
      if (!api_?.data?.data.type) {
        const api_2 = await axios.post(`/checkout/create`, {
          order_id: id,
          amount: api_?.data?.data?.amount,
          order_type: "xanadu",
        });
        setpay(api_2.data.data);
      }

      setLoading(false);
    };
    fetchData();
  }, []);
  const array_sum = (array: any) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += parseInt(array[i]);
    }
    console.log(sum);
    return sum;
  };

  const renderSidebar = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 px-0 sm:p-6 xl:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex-shrink-0 w-full sm:w-40">
            <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
              <NcImage
                src={
                  "/uploads/holidays/image/jpeg/640b110bc73d2960253fe3bb.jpg"
                }
              />
            </div>
          </div>
          <div className="py-5 sm:px-5 space-y-3">
            <div>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                Xanadu festival
              </span>
              <span className="text-base font-medium mt-1 block">
                Xanadu festival
              </span>
            </div>
            <span className="block  text-sm text-neutral-500 dark:text-neutral-400"></span>
            <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
            <StartRating />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold">
            {auth.site_data.үнийн_задаргаа}
          </h3>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>{auth.site_data.нийт_үнэ} </span>
            <span>${data.amount}</span>
          </div>

          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>{auth.site_data.Одоо_төлөх}</span>
            <span>${data.amount}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderMain = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          {auth.site_data.Confirm_and_payment}
        </h2>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>

        <div>
          <h3 className="text-2xl font-semibold">{auth.site_data.Pay_with}</h3>
          {data.type ? (
            <div className=" w-full h-[50px] rounded-lg bg-green-400 mt-6 text-center pt-3">
              Paid
            </div>
          ) : (
            <div className="mt-6">
              {pay && (
                <a
                  href={pay.url}
                  className={`px-4 py-1.5 sm:px-6 sm:py-2.5  rounded-full flex items-center justify-center focus:outline-none bg-neutral-800 text-white`}
                  target="_blank"
                >
                  <span className="mr-2.5">Credit card</span>
                  <img className="w-8" src={visaPng} alt="" />
                  <img className="w-8" src={mastercardPng} alt="" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-CheckOutPage ${className} h-screen`}
      data-nc-id="CheckOutPage"
    >
      {loading ? (
        <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
          <div className="flex mt-16 justify-center items-center p-5">
            <ButtonPrimary loading>Loading...</ButtonPrimary>
          </div>
        </main>
      ) : (
        <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">
            {renderMain()}
          </div>
          <div className="hidden lg:block flex-grow">{renderSidebar()}</div>
        </main>
      )}
    </div>
  );
};

export default CheckOutPage;

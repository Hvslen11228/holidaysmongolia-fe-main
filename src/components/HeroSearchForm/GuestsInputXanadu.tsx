import React, { Fragment, useEffect, useState, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import NcInputNumber from "components/NcInputNumber/NcInputNumber";
import { FC } from "react";
import ClearDataButton from "./ClearDataButton";
import ButtonSubmit from "./ButtonSubmit";
import { GuestsObject } from "components/HeroSearchForm2Mobile/GuestsInput";
import { PathName } from "routers/types";
import AuthContext from "context/AuthContext";
export interface GuestsInputProps {
  defaultValue: any;
  onChange?: (data: any) => void;
  fieldClassName?: string;
  className?: string;
  buttonSubmitHref?: PathName;
  hasButtonSubmit?: boolean;
}

const GuestsInput: FC<GuestsInputProps> = ({
  defaultValue,
  onChange,
  fieldClassName = "[ nc-hero-field-padding ]",
  className = "[ nc-flex-1 ]",
  buttonSubmitHref = "/listing-stay-map",
  hasButtonSubmit = true,
}) => {
  // tent: tent,
  //             yurt: yurt,
  const auth: any = useContext(AuthContext);
  const [guestAdultsInputValue, setGuestAdultsInputValue] = useState(
    defaultValue.yurt || 0
  );
  const [guestChildrenInputValue, setGuestChildrenInputValue] = useState(
    defaultValue.tent || 0
  );

  useEffect(() => {
    setGuestAdultsInputValue(defaultValue.yurt || 0);
    setGuestChildrenInputValue(defaultValue.tent || 0);
  }, [defaultValue]);

  const handleChangeData = (value: number, type: keyof GuestsObject) => {
    let newValue = {
      yurt: guestAdultsInputValue,
      tent: guestChildrenInputValue,
    };
    if (type === "guestAdults") {
      setGuestAdultsInputValue(value);
      newValue.yurt = value;
    }
    if (type === "guestChildren") {
      setGuestChildrenInputValue(value);
      newValue.tent = value;
    }
    onChange && onChange(newValue);
  };

  const totalGuests = guestChildrenInputValue + guestAdultsInputValue;

  return (
    <Popover className={`flex relative ${className}`}>
      {({ open }: any) => (
        <>
          <div
            className={`flex-1 flex items-center focus:outline-none cursor-pointer ${
              open ? "nc-hero-field-focused" : ""
            }`}
          >
            <Popover.Button
              className={`flex-1 flex text-left items-center ${fieldClassName} space-x-3 `}
              onClick={() => document.querySelector("html")?.click()}
            >
              <div className="text-neutral-300 dark:text-neutral-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="nc-icon-field"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <span className="block xl:text-lg font-semibold">
                  {totalGuests || ""} Accommodations
                </span>
                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
                  {totalGuests ? "Accommodations" : "Add accommodations"}
                </span>
              </div>
            </Popover.Button>

            <div className="relative">
              {!!totalGuests && open && (
                <ClearDataButton
                  onClick={() => {
                    setGuestAdultsInputValue(0);
                    setGuestChildrenInputValue(0);
                  }}
                />
              )}
            </div>

            {/* BUTTON SUBMIT OF FORM */}
            {hasButtonSubmit && (
              <div className="pr-2 xl:pr-4">
                <ButtonSubmit href={auth.site_data.home_search_button_href} />
              </div>
            )}
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl">
              <NcInputNumber
                className="w-full"
                defaultValue={guestAdultsInputValue}
                onChange={(value) => handleChangeData(value, "guestAdults")}
                max={4}
                label={"Yurt"}
                desc={"yort for"}
              />
              <NcInputNumber
                className="w-full mt-6"
                defaultValue={guestChildrenInputValue}
                onChange={(value) => handleChangeData(value, "guestChildren")}
                max={2}
                label={"Tent"}
                desc={"tent for"}
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default GuestsInput;

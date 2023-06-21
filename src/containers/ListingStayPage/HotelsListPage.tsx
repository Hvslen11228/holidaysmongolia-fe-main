import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import React, { FC, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "context/AuthContext";
import axios from "../../axios";
import StayCardHotel from "components/StayCardHotel/StayCard";
import SectionGridFilterCard from "./SectionGridFilterCard";
import { StayDataType } from "data/types";
import { Helmet } from "react-helmet";
import { DEMO_STAY_LISTINGS } from "data/listings";
import Heading from "components/Heading/Heading";


const DEMO_DATA: StayDataType[] = [];

export interface ListingStayPageProps {
  stayListings?: StayDataType[];
  className?: string;
}

const ListingStayPage: FC<ListingStayPageProps> = ({ className = "",  stayListings = DEMO_DATA }) => {
  const auth: any = useContext(AuthContext);
  const params: any = useParams();
  const { id } = params;
  const [data, setData] = useState(stayListings);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
          const api = await axios.get(`/complex`);
          setData(api?.data?.data);
          setLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const renderCard = (stay: any) => {
    return <StayCardHotel key={stay._id} data={stay} />;
  };

  return (
    <div className={`nc-ListingStayPage relative overflow-hidden ${className}`} data-nc-id="ListingStayPage">
      <Helmet>
        <title>{auth.site_data.hotels}</title>
      </Helmet>
      <BgGlassmorphism />

      <div className="container relative overflow-hidden">
        <div className='py-16'>
              <Heading desc={auth.site_data.hotel_text} isCenter>
        {auth.site_data.hotels}
      </Heading>
        <div className="mb-8 lg:mb-11"></div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((stay) => renderCard(stay))}
            </div>
            <div className="flex mt-16 justify-center items-center">
            </div>
        </div>

        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
            uniqueClassName="ListingStayMapPage"
          />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 className="py-24 lg:py-28" />

        {/* SECTION */}
        <div className="relative py-16 mb-24 lg:mb-28">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>
      </div>
    </div>
  );
};

export default ListingStayPage;

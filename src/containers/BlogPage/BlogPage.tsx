import React from "react";
import { Helmet } from "react-helmet";
import SectionAds from "./SectionAds";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionMagazine5 from "./SectionMagazine5";
import SectionLatestPosts from "./SectionLatestPosts";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { FC, Fragment, useEffect, useState, useContext } from "react";
import axios from "../../axios";
const BlogPage: React.FC = () => {
  const [MAGAZINE1_POSTS, set_MAGAZINE1_POSTS] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const api_ = await axios.get(`/blog`);
      set_MAGAZINE1_POSTS(api_.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      <Helmet>
        <title>Blog || Booking React Template</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      {/* ======== ALL SECTIONS ======== */}
      {/* ======= START CONTAINER ============= */}
      <div className="container relative">
        {/* === SECTION 8 === */}
        <SectionLatestPosts
          className="py-16 lg:py-28"
          posts={MAGAZINE1_POSTS}
        />

        {/* === SECTION 1 === */}
        <SectionSubscribe2 className="pb-16 lg:pb-28" />
      </div>
    </div>
  );
};

export default BlogPage;

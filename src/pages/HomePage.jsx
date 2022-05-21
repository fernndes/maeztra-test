import React from "react";
import Banner from "../layout/components/HomeBanner/Banner";
import Newsletter from "../layout/content/Newsletter/Newsletter";
import ProductSummary from "../layout/content/ShowCase/ProductSummary";
import TipBarBrands from "../layout/components/TipBar/TipBarBrands";
import TipBarContent from "../layout/components/TipBar/TipBarContent";
import HomeArticle from "../layout/components/Article/HomeArticle";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <TipBarContent />
      <TipBarBrands />
      <ProductSummary />
      <HomeArticle />
      <Newsletter />
    </div>
  );
}

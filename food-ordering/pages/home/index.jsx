import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Reservation from "@/components/Reservation";
import MenuWrapper from "@/components/product/MenuWrapper";
import React from "react";

const Index = () => {
  return (
    <div>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation />
    </div>
  );
};

export default Index;
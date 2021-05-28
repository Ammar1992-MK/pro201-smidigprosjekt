//Hvor er denne hen i prototypen hilsen sandra
import * as React from "react";
import {ScrollView, TouchableOpacity } from "react-native";

import CarouselCard from "./CarouselCard";
import CardSmall from "./Cards/CardSmall";

const CardCarousel = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity>
        <CarouselCard lamp={"smartPlus"} />
      </TouchableOpacity>
      <CarouselCard lamp={"sunbellSmart"} />
      <CarouselCard lamp={"lamp3"} />
      <CarouselCard lamp={"lamp4"} />
    </ScrollView>
  );
};

export default CardCarousel;

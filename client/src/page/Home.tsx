import React from 'react';
import Banner from '../components/home/Banner';
import BodyHome from '../components/home/BodyHome';
import { Deal } from '../components/home/Deal';
import HeaderHome from '../components/home/HeaderHome';
import ProductHome from '../components/home/ProductHome';
import { ServiceHome } from '../components/home/ServiceHome';
import Seketon from '../components/Seketon';

export default function Home() {
  return (
    <div className="">
      <Banner />
      <ServiceHome />
      <Deal />
      <ProductHome />
      <HeaderHome />
      <BodyHome />
      {/* <Seketon/> */}
    </div>
  );
}

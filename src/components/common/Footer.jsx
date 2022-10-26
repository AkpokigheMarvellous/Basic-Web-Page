import React from 'react';
import Zuri from '../../assets/images/zuri.png';


const Footer = () => (
  <footer className="mt-[100px]">
    <hr />
    <div className="hidden lg:w-[100%] lg:flex lg:gap-[350px] lg:items-center lg:mt-[100px]">
      <img src={Zuri} alt="Zuri Logo" />
      <p>@ 2022</p>
    </div>
  </footer>
);

export default Footer;
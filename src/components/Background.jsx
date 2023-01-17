import React from 'react';
import { BsStars } from 'react-icons/bs';
import { HiOutlineMoon } from 'react-icons/hi';
import { GiFallingStar } from 'react-icons/gi';

const Background = () => {
  return (
    <>
      <HiOutlineMoon className="background__moon" />
      <GiFallingStar className="background__fs--1" />
      <GiFallingStar className="background__fs--2" />
      <BsStars className="background__star--1" />
      <BsStars className="background__star--2" />
      <BsStars className="background__star--3" />
    </>
  );
};

export default Background;

import React, { useState } from 'react';
import styled from 'styled-components';
import {Modal} from './modal';

const Img = styled.img`
  padding: 10px;
  width: 90%;
  height: 90%;
  object-fit: cover;
  transition: 1s;
  &:hover{
    transform: scale(1.1);
  }
`;

export const UnsplashImage = ({images, index, url, key }) => {
  const [modal, setModal] = useState(false);
  const handleClick = (e) => {
    setModal(!(modal))
  }
  return (
    <>
      <Img onClick={handleClick} src={url} alt="" />
      { modal && (
        <Modal images = {images} selectedImg={url} setSelectedImg={setModal} index = {index}/>
      )}
    </>
  )
}

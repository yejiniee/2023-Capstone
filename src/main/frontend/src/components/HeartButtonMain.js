import React, { useState, useEffect } from "react";

import styled from "styled-components";
import FullHeartImg from "../assets/heart_full.svg";
import EmptyHeartImg from "../assets/heart_empty.svg";
import styles from "../styles/css/ItemList.module.css";

{
  /* 
const Heart = styled.img`
  width: 20px;
  height: 20px;
  color: red;
`; */
}

const HeartButtonMain = ({ heart, onClick }) => {
  return (
    <img
      className={styles.heartButton}
      src={heart ? FullHeartImg : EmptyHeartImg}
      onClick={onClick}
    />
  );
};

export default HeartButtonMain;

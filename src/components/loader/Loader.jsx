import React from "react";
import style from "./Loader.module.css";
import Logo from "./../logo/Logo";
export default function Loader() {
  return (
    <>
      <div className={`${style.loaderPage} `}>
        <span className={`${style.loader} `}/>
        <Logo width={"12rem"} theme="lightBg" />
      </div>
    </>
  );
}

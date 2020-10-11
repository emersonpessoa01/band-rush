import React from "react";
import css from "./header.module.css";

export default function Header({ description }) {
  //return <h1 className={css.header}>{description}</h1>;
  return (
    <div className="header text-white shadow p-2">
      <div className="text-center border-bottom p-2 mb-2 text-dark">
      <span className={css.header}><i className="small material-icons">insert_chart</i></span>
      <span className={css.star}><i className="small material-icons">star</i></span>
      </div>
      <h1 className={css.header}>{description}</h1>
    </div>
  );
}

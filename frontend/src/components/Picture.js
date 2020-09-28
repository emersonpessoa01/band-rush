import React from "react";
import css from "./picture.module.css";

export default function Picture({ sourceImage, description }) {
  return (
    <div>
      <img
        className={css.picture}
        src={sourceImage}
        alt={description}
        title={description}
      />
    </div>
  );
}

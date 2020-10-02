import React from "react";
import css from "./header.module.css"

export default function Header({ children }) {
  return <h1 className={css.header}>{children}</h1>;
}

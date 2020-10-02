import React from "react";
import css from "./header.module.css"

export default function Header({ children }) {
  return <h2 className={css.header}>{children}</h2>;
}


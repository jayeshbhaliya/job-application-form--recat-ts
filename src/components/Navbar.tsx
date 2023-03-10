import React from "react";

type NavbarProps = {
  current: Number;
  navChange: (event: number) => void
}

function Navbar(props: NavbarProps) {
  // console.log(props)
  const { current } = props;
  const navItem = [
    "Basic Details",
    "Education Details",
    "Work Experience",
    "Langauge Known",
    "Technology You Known",
    "Refrence Contact",
    "Preferances",
  ];
  return (
    <ul className="navbar">
      {navItem.map((item, index) => {
        return (
          <li key={index} onClick={() => props.navChange(index + 1)}
            className={current === (index + 1) ? "active" : "no-active"} > {item}</li>)
      })}
    </ul>
  );
}

export default Navbar;

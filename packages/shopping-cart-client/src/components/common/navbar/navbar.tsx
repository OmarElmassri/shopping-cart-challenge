import React from "react";
import { GetIcon } from "../../../assets/IconGenerator";
import history from "../../../utils/history";
import TextItem from "../text/TextItem";
import CartCounter from "./helpers/cartCounter";

const Navbar = () => {
  return (
    <div className="white-back shadow">
      <div className="full-container vertical-med-padd flex-nowrap justify-space-between">
        <div onClick={() => history.push("/")} className="flex-nowrap pointer">
          <GetIcon name="bag" classes="end-sm-marg" size="tiny" />
          <TextItem content="brand" classes="parag-med text-upper" />
        </div>
        <CartCounter />
      </div>
    </div>
  );
};

export default Navbar;

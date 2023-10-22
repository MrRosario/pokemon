import React from "react";
import Button from "components/Button";
import iconPlus from "assets/images/plus.png";
import { SideBarWrapper, SideBarItem, SideBarList } from "./styled";

const Sidebar = () => (
  <SideBarWrapper>

    <SideBarList>
      <SideBarItem>?</SideBarItem>
    </SideBarList>

    <SideBarList>
      <SideBarItem>?</SideBarItem>
    </SideBarList>
    
    <Button icon={iconPlus} />

  </SideBarWrapper>
);

export default Sidebar;

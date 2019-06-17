import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const tabsData = [
  { id: 1, name: "首页", path: "/home", icon: "icon-homepage_fill" },
  { id: 2, name: "菜单", path: "/menu", icon: "icon-createtask_fill" },
  { id: 3, name: "时光", path: "/time", icon: "icon-integral_fill" },
  { id: 4, name: "取茶", path: "/order", icon: "icon-service_fill" },
  { id: 5, name: "我的", path: "/mine", icon: "icon-addressbook_fill" }
];

const Tabs = () => {
  return (
    <nav className="tabs border-top">
      {tabsData.map(item => (
        <NavLink className="tab" to={item.path} key={item.id}>
          <span className={`iconfont ${item.icon}`} />
          <span>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Tabs;
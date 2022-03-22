import React from "react";
import { useDispatch } from "react-redux";
import  Sidebar from "../../components/sidebar/Sidebar";

export const Layout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Sidebar/>
    </div>
  );
};

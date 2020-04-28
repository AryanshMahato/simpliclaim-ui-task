import React from "react";
import Layout from "./Global/Layout/Layout";
import Menu from "./Components/Menu/Menu";
import Title from "./Components/Title/Title";
import Calender from "./Containers/Calender/Calender";

//? Default Export
export default () => {
  //? JSX Return
  return (
    <Layout>
      <Menu />
      <Title name={"Dr Sherry White"} />
      <Calender />
    </Layout>
  );
};

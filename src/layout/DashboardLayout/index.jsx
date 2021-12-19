import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";
import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Index = ({ children }) => {
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        <Sidebar />
        <Content>{children}</Content>
      </Container>
      <div className="screen-size-message text-center">
        <FaInfoCircle fontSize="5rem" />
        <div>
          This dashboard currently doesn't support mobile or table devices
        </div>
        <div className="mt-3">
          For best experience, We recommend you access the dashboard with{" "}
          <b>Google Chrome, Mozilla Firefox or any other suitable browser </b>{" "}
          on a<b> DESKTOP</b> device!
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;

const Container = styled.div``;

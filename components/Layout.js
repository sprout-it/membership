import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Layout, Menu, Col, Row, Button, Typography, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header from './Header'
import Footer from './Footer'

const { Content } = Layout;
const LayoutComponent = ({ children }) => {

  return (
    <Layout
      className="navbar-layout"
      style={{
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        background: "#fff",
        maxWidth: "100vw",
        overflowX: 'hidden'
      }}
    >
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default LayoutComponent;

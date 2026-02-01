import Header from "../components/header";
import Body from "../components/body/body";
import Footer from "../components/footer/footer";
import MittiAI from "../components/mittiAI";
import React from "react";
import "./page.css";
export default function Home() {
  return (
    <>
      <div className="grandparent-body-width">
        <div className="parent-body-width">
          <Header />
          <MittiAI />
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}


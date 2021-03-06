import React, { useState } from "react";
import Layout from "../components/layout/layout";
import LoggedInNavbar from "../components/LoggedInNavbar";
import LoggedInSidebar from "../components/LoggedInSidebar";
import RedeemOffersSection from "../components/RedeemOffers";

const Redeem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <LoggedInSidebar isOpen={isOpen} toggle={toggle} />
        <LoggedInNavbar toggle={toggle} />
        <RedeemOffersSection />
      </Layout>
    </>
  );
};

export default Redeem;

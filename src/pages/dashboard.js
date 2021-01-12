import React, { useState } from "react";
import Layout from "../components/layout/layout";
import LeaderboardSection from "../components/LeaderBoardSection/Index";
import LoggedInSidebar from "../components/LoggedInSidebar";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <LoggedInSidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ProfileSection
          gpoints="120"
          cpoints="160"
          text="Hello Stephany"
          note="Here’s a look at your score this week"
          greenweekpoints="10"
          carbonweekpoints="20"
        />
        <LeaderboardSection />
      </Layout>
    </>
  );
};

export default Dashboard;

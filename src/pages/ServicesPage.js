import React from "react";
import Footer from "../components/common/Footer";
import Menu from "../components/common/Menu";
import PageHeader from "../components/common/PageHeader";
import TopBar from "../components/common/TopBar";
import Services from "../components/services/Services";
const ServicesPage = () => {
  return (
    <div>
      <Menu />
      <PageHeader image="/assets/images/terms.png" title="Services" />
      <Services />
    </div>
  );
};

export default ServicesPage;

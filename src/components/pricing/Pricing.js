import React from "react";
import PricingGridItem from "./PricingGridItem";

const Pricing = () => {
  return (
    <section className="pricing-section p-tb-100">
      <div className="container">
        <div className="pricing-box-grid">
          <div className="pricing-grid-item">
            <div className="pricing-grid-item-inner">
              <div className="pricing-item-header">
                <h3>
                  <img src="/assets/images/pricing-check.png" alt="icon" />{" "}
                  Basic
                </h3>
              </div>
              <div className="pricing-item-amount">
                <h4>
                  <small>$</small>0.00/<span>Month</span>
                </h4>
              </div>
              <div className="pricing-item-body">
                <ul className="pricing-item-list">
                  <li>
                    <img
                      src="/assets/images/pricing-arrow.png"
                      alt="icon"
                      className="pricing-list-arrow"
                    />
                    Google Analytics
                    <span className="pricing-list-info">
                      <i className="bx bxs-info-circle"></i>
                    </span>
                  </li>
                  <li>
                    <img
                      src="/assets/images/pricing-arrow.png"
                      alt="icon"
                      className="pricing-list-arrow"
                    />
                    Drag & Drop Widgets
                  </li>
                  <li>
                    <img
                      src="/assets/images/pricing-arrow.png"
                      alt="icon"
                      className="pricing-list-arrow"
                    />
                    Mobile + Desktop Apps
                  </li>
                  <li>
                    <img
                      src="/assets/images/pricing-arrow.png"
                      alt="icon"
                      className="pricing-list-arrow"
                    />
                    Messenger Integration
                    <span className="pricing-list-info">
                      <i className="bx bxs-info-circle"></i>
                    </span>
                  </li>
                  <li>
                    <img
                      src="/assets/images/pricing-arrow.png"
                      alt="icon"
                      className="pricing-list-arrow"
                    />
                    100 ChatBot Triggers
                  </li>
                  <li>
                    <img
                      src="/assets/images/pricing-arrow.png"
                      alt="icon"
                      className="pricing-list-arrow"
                    />
                    Visitor Info
                  </li>
                  <li>
                    <img
                      src="/assets/images/pricing-arrow.png"
                      alt="icon"
                      className="pricing-list-arrow"
                    />
                    Quick Responses
                    <span className="pricing-list-info">
                      <i className="bx bxs-info-circle"></i>
                    </span>
                  </li>
                  <li>
                    <img
                      src="/assets/images/pricing-arrow.png"
                      alt="icon"
                      className="pricing-list-arrow"
                    />
                    24/7 Live Chat
                  </li>
                  <li>
                    <img
                      src="/assets/images/pricing-arrow.png"
                      alt="icon"
                      className="pricing-list-arrow"
                    />
                    Email Integration
                  </li>
                </ul>
                <button className="btn1 orange-gradient btn-with-image">
                  <i className="flaticon-login"></i>
                  <i className="flaticon-login"></i>
                  Get started
                </button>
              </div>
            </div>
          </div>

          <PricingGridItem
            title="Advanced"
            number="49.99/"
            t2="Premium support"
            t3="2 Business mastercards"
            t4="5 Aila Users"
          />
          <PricingGridItem
            title="Premium"
            number="56.00/"
            t2="Up to 4 chat operators"
            t3="Drag & Drop Widgets"
            t4="150 ChatBot Triggers"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

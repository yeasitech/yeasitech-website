/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import PortFolio1 from "../../assets/img/portfolio/img-1.jpg";
import PortFolio2 from "../../assets/img/portfolio/img-2.jpg";
import PortFolio3 from "../../assets/img/portfolio/img-3.jpg";
import PortFolio4 from "../../assets/img/portfolio/img-4.jpg";
import PortFolio5 from "../../assets/img/portfolio/img-5.jpg";
import PortFolio6 from "../../assets/img/portfolio/img-6.jpg";

import React, { useState } from "react";
import { Card, CardImg } from "reactstrap";

const Portfolio = (props) => {
  const [portfolioData, setPortfolioData] = useState([
    { type: "Web", img: PortFolio1 },
    { type: "App", img: PortFolio2 },
    { type: "Graphics", img: PortFolio3 },
    { type: "App", img: PortFolio4 },
    { type: "Graphics", img: PortFolio5 },
    { type: "App", img: PortFolio6 },
  ]);

  const changePortfolio = (id) => {
    if (id == "app") {
      let data = [
        { type: "App", img: PortFolio2 },
        { type: "App", img: PortFolio4 },
        { type: "App", img: PortFolio6 },
      ];
      setPortfolioData(data);
    } else if (id == "web") {
      let data = [{ type: "Web", img: PortFolio1 }];
      setPortfolioData(data);
    } else if (id == "graphics") {
      let data = [
        { type: "Graphics", img: PortFolio3 },
        { type: "Graphics", img: PortFolio5 },
      ];
      setPortfolioData(data);
    } else {
      let data = [
        { type: "Web", img: PortFolio1 },
        { type: "App", img: PortFolio2 },
        { type: "Graphics", img: PortFolio3 },
        { type: "App", img: PortFolio4 },
        { type: "Graphics", img: PortFolio5 },
        { type: "App", img: PortFolio6 },
      ];
      setPortfolioData(data);
    }
  };

  return (
    <section id="portfolios" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <span>Portfolio</span>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="controls text-center">
              <button
                className="filter btn btn-common btn-effect"
                onClick={() => changePortfolio("all")}
              >
                All
              </button>
              <button
                className="filter btn btn-common btn-effect"
                onClick={() => changePortfolio("app")}
              >
                App
              </button>
              <button
                className="filter btn btn-common btn-effect"
                onClick={() => changePortfolio("web")}
              >
                Web
              </button>
              <button
                className="filter btn btn-common btn-effect"
                onClick={() => changePortfolio("graphics")}
              >
                Graphics
              </button>
            </div>
          </div>
        </div>

        <div id="portfolio" className="row">
          {portfolioData.map((data) => {
            return (
              <div class="col-lg-4 col-md-6 col-xs-12">
                <div class="portfolio-item">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={data.img}
                      alt="Card image cap"
                    />
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

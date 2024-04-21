import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { dataportfolio } from "../../content_option";

export const Artifacts = () => {
  return (
    <HelmetProvider>
      <Container className="Artifacts-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Artifacts</title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Artifact Gallery</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="intro_btn-action pb-5">
          <Link to="/intro" className="text_2">
            <div id="button_p" className="ac_btn btn ">
              <div style={{ display: "flex", alignItems: "center" }}>
                <ChevronLeftIcon />
                Introduction
              </div>
              <div className="ring one"></div>
              <div className="ring two"></div>
              <div className="ring three"></div>
            </div>
          </Link>
          <Link to="/epilogue" className="text_2">
            <div id="button_h" className="ac_btn btn ">
              <div style={{ display: "flex", alignItems: "center" }}>
                Epilogue
                <ChevronRightIcon />
              </div>
              <div className="ring one"></div>
              <div className="ring two"></div>
              <div className="ring three"></div>
            </div>
          </Link>
        </div>
      </Container>
    </HelmetProvider>
  );
};

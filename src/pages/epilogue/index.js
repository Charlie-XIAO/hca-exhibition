import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export const Epilogue = () => {
  return (
    <HelmetProvider>
      <Container className="Epilogue-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Epilogue</title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Epilogue</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                facilisis sed magna ut ornare. Maecenas nibh risus, mollis nec
                cursus id, tristique sit amet sem. Sed porttitor congue ipsum
                viverra interdum. Duis leo orci, tristique sed viverra eget,
                scelerisque volutpat arcu. Cras laoreet malesuada tempus. Cras
                fringilla efficitur turpis ac molestie. Vivamus eu placerat
                nunc. Nulla facilisi.
              </p>
              <p>
                Integer vulputate eleifend odio id fringilla. Aliquam tempus
                elit in venenatis dapibus. Phasellus a massa suscipit, posuere
                nisi nec, blandit arcu. Etiam venenatis neque eget turpis
                malesuada, convallis vestibulum mi hendrerit. Donec eu libero
                non lectus ornare iaculis sit amet et arcu. Mauris placerat enim
                eu diam rutrum sodales. Aliquam erat volutpat. Ut vulputate
                rutrum eleifend.
              </p>
              <p>
                Morbi erat dolor, lacinia id pharetra sed, semper quis nulla. In
                ac metus eu odio vehicula bibendum nec et dui. Fusce at ex quis
                leo finibus luctus non sit amet purus. Aliquam sit amet
                fringilla nunc. Donec semper neque et enim cursus, non molestie
                diam ullamcorper. Nam vel laoreet odio, et posuere velit. Cras
                orci felis, imperdiet id fermentum id, mollis at arcu. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <p>
                Aliquam a dui a magna finibus ultricies eget commodo ipsum.
                Aenean lorem purus, commodo et blandit at, fermentum id sapien.
                Nulla pretium pellentesque sapien eget tempor. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nunc est nisl, rutrum eget posuere id, lobortis
                a erat. Aliquam at auctor augue, ut venenatis ligula. Aliquam a
                sollicitudin est.
              </p>
              <p>
                Aenean porttitor molestie lacus, quis interdum erat aliquam et.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec pretium volutpat lobortis. Mauris
                ex libero, scelerisque vel nibh quis, aliquam tristique urna.
                Aenean molestie tristique massa ut vestibulum. Donec tincidunt
                metus ut feugiat efficitur. Pellentesque in cursus lectus. Morbi
                efficitur at ex quis faucibus. Praesent ut sapien tincidunt,
                egestas lacus at, iaculis est. Curabitur in orci nisi. Ut ac
                ante et diam facilisis mattis. Mauris vel diam quis urna laoreet
                faucibus. Suspendisse hendrerit facilisis hendrerit. Nullam
                augue urna, mattis ut nunc sit amet, commodo condimentum metus.
              </p>
            </div>
          </Col>
        </Row>
        <div className="intro_btn-action pb-5">
          <Link to="/artifacts" className="text_2">
            <div id="button_p" className="ac_btn btn ">
              <div style={{ display: "flex", alignItems: "center" }}>
                <ChevronLeftIcon />
                Artifacts
              </div>
              <div className="ring one"></div>
              <div className="ring two"></div>
              <div className="ring three"></div>
            </div>
          </Link>
          <span className="text_2" onClick={() => window.scrollTo(0, 0)}>
            <div className="cur_btn btn">
              <div style={{ display: "flex", alignItems: "center" }}>
                Epilogue
              </div>
            </div>
          </span>
        </div>
      </Container>
    </HelmetProvider>
  );
};

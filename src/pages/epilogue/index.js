import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { meta } from "../../content_option";

export const Epilogue = () => {
  return (
    <HelmetProvider>
      <Container className="Epilogue-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Epilogue</title>
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
                The dragon has been an important motif in Chinese culture,
                symbolizing power, strength, as well as good fortune. This
                exhibition showcases the evolution of the dragon motif. The five
                artifacts that can be dated to the pre-Han period, the pig
                dragon, the pair of arched dragon pendants, the <i>ding</i>{" "}
                ritual vessel with the taotie decor, the jade dragon, and the
                dragon <i>bi</i> disc, all testify to the great spiritual
                significance possessed by the dragon motif in the early periods
                of Chinese culture. The usage of dragon patterns in objects that
                had ritual and political significance, such as the <i>ding</i>{" "}
                vessel and the <i>bi</i> disc, also reveals that the dragon
                motif began to be associated with imperial power from an early
                age. This association became most clear during the Ming and Qing
                dynasties. As illustrated in the panel with dragon from the Qing
                dynasty and the badge with the five-clawed dragon from the Ming
                dynasty, the dragon motif was used exclusively by emperors and
                senior members of the royal family, revealing the hierarchical
                nature of court life.
              </p>
              <p>
                In addition to its association with imperial authority, the
                dragon is also worshiped as the guardian of the spiritual realm.
                The dragon motif is depicted in the tomb tile with green dragon
                of the East and the Chinese dragon roof tile, as it is believed
                to be able to fend off evil and protect the living as well as
                the dead. Dragons are also believed to be the rulers of the
                weather as well as moving bodies of water, including waterfalls,
                rivers, and the seas.
              </p>
              <p>
                With the passage of time, the dragons have come to be viewed as
                a symbol of Chinese culture. The dragon motif is widely used on
                artifacts exported to foreign countries, of which the blue and
                white "dragon" moonflask is an example.
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
                Back to top
              </div>
            </div>
          </span>
        </div>
      </Container>
    </HelmetProvider>
  );
};

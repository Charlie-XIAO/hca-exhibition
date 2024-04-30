import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { meta } from "../../content_option";

export const Introduction = () => {
  return (
    <HelmetProvider>
      <Container className="Intro-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Introduction</title>
        </Helmet>
        <Row className="mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Introduction</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <div>
              <h2>Early Dynastic Period to Han Dynasty</h2>
              <p>
                In the early dynastic periods, dragons were primarily depicted
                as serpentine creatures amalgamating various animal features,
                symbolizing the harmonious essence of nature. These depictions,
                found on pottery and jade carvings, were less about imperial
                authority and more about shamanistic practices and communal
                protection. By the Han Dynasty, however, the dragon had evolved
                into a symbol of imperial benevolence and power, often depicted
                in art and literature as controlling the weather and water,
                crucial for agriculture.
              </p>
              <h2>Tang Dynasty to Yuan Dynasty</h2>
              <p>
                During the Tang and subsequent dynasties, the dragon's imagery
                became more standardized and sophisticated, reflecting the
                centralization of imperial power. The dragon's association with
                the emperor was emphasized through its use in courtly art and
                architecture, where it adorned everything from palace walls to
                ceremonial robes. This period marked a significant shift, with
                the dragon evolving from a general symbol of good fortune to a
                specific emblem of the emperor's divine right to rule.
              </p>
              <h2>Ming and Qing Dynasties</h2>
              <p>
                The Ming and Qing dynasties saw the pinnacle of dragon symbolism
                in imperial power. The dragon during these periods was almost
                exclusively associated with the emperor, depicted with five
                claws and in specific colors like gold and yellow, signifying
                the highest authority. Art from these periods shows a meticulous
                attention to detail in dragon depictions, with strict rules
                governing who could use and display dragon imagery, reinforcing
                social hierarchies and the exclusivity of the emperor's power.
              </p>
              <h2>Modern Interpretations</h2>
              <p>
                In contemporary times, the dragon continues to be a revered
                symbol in Chinese culture, though its imperial connotations have
                diminished, making way for broader nationalistic and cultural
                symbolism. This shift reflects the transformation of China from
                a feudal imperial state to a modern nation-state, where the
                dragon symbolizes general prosperity, cultural heritage, and
                national strength rather than royal authority.
              </p>
              <h2>Unexplored Angles and Further Research</h2>
              <p>
                Future research could explore regional variations in dragon
                depictions, particularly comparing motifs from northern and
                southern China, which could reveal how geographic, climatic, and
                cultural differences influenced dragon iconography.
                Additionally, examining the role of dragons in lesser-known
                dynasties or in non-Han ethnic groups within China could provide
                new insights into the diversity and adaptability of dragon
                symbolism in Chinese history.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h5>
              <i>
                This evolution of the dragon—from a communal protector to a
                symbol of supreme imperial authority, and now to a national
                emblem—illustrates the deep interconnection between cultural
                symbols and socio-political changes, highlighting the dragon's
                enduring relevance in Chinese art and culture.
              </i>
            </h5>
          </Col>
        </Row>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <hr className="t_border my-4 ml-0 text-left" />
            <p>
              <div>
                <strong>Curator:</strong> Sarah Perlman, Isabelle, Claire Hou,
                Calvin Lin, Yao Xiao
              </div>
              <div>
                <strong>Instructor:</strong> Professor{" "}
                <a
                  href="https://shanghai.nyu.edu/academics/faculty/directory/lala-zuo"
                  target="_blank"
                  rel="noreferrer"
                >
                  LaLa Zuo
                </a>
              </div>
              <div>April 2022</div>
            </p>
          </Col>
        </Row>
        <div className="intro_btn-action pb-5">
          <Link to="/" className="text_2">
            <div id="button_p" className="ac_btn btn">
              <div style={{ display: "flex", alignItems: "center" }}>
                <ChevronLeftIcon />
                Home
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
          <Link to="/artifacts" className="text_2">
            <div id="button_h" className="ac_btn btn">
              <div style={{ display: "flex", alignItems: "center" }}>
                Artifacts
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

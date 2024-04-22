import React, { useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { dataportfolio } from "../../content_option";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { meta } from "../../content_option";

const SingleArtifact = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="artifact-container">
        <div className="artifact-wrapper">
          <div className="artifact-image" ref={ref}>
            <img src={item.img} alt="" />
            <div className="artifact-caption">{item.caption}</div>
          </div>
          <motion.div className="artifact-text" style={{ y }}>
            <h3 className="artifact-title">
              <span>{item.title}</span>
              <span className="artifact-title-sub">
                <Typewriter
                  options={{
                    strings: [
                      `【${item.title_zh}】`,
                      item.time,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                    delay: 100,
                  }}
                />
              </span>
            </h3>
            <hr className="artifact-title-hr" />
            <p dangerouslySetInnerHTML={{ __html: item.desc }} />
            <div className="artifact-ref">
              <strong>References</strong>
              <ol>
                {item.ref.map((ref, i) => (
                  <li key={i}>
                    <span>{ref.text}</span>
                    <a href={ref.href} target="_blank" rel="noreferrer">
                      [Link]
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Artifacts = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <HelmetProvider>
      <div className="Artifacts-header" ref={ref}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Artifacts</title>
        </Helmet>
        <div className="artifact-progress">
          <div className="artifact-progress-heading">
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
            <h1 className="display-4">Artifacts</h1>
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
          <motion.div
            className="artifact-progress-bar"
            style={{ scaleX }}
          ></motion.div>
        </div>
        {dataportfolio.map((item, i) => (
          <SingleArtifact item={item} key={i} />
        ))}
      </div>
    </HelmetProvider>
  );
};

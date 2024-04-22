import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Epilogue } from "../pages/epilogue";
import { Introduction } from "../pages/intro";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Artifacts } from "../pages/artifacts";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/epilogue" element={<Epilogue />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
    </div>
  );
}

export default AppRoutes;

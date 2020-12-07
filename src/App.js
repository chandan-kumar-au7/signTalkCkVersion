import React, { useRef, useEffect } from "react";
import { useLocation, Switch, Route, withRouter } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import "./App.css";
import Navbar from "./components/LargeComponent/dashboard/Navbar";
import Dashboard from "./components/LargeComponent/dashboard/Dashboard";
import Profile from "./components/LargeComponent/Profile";
import JobRequests from "./components/LargeComponent/jobRequests/JobRequests";
import Schedule from "./components/LargeComponent/Schedule/Schedule";
import Completed from "./components/LargeComponent/completed/Completed";
import Notification from "./components/LargeComponent/Notification/Notification";
import Message from "./components/LargeComponent/Message/Message";
// testing for ck
import FullViewjobRequest from "./components/LargeComponent/jobRequests/FullViewjobRequest";
// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
import { ToastifyAlert } from "../src/components/AlertComponent/ToastifyAlert";
// Views
import Home from "./views/Home";
import Error from "./views/Error";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = (props) => {
  const childRef = useRef();
  let location = useLocation();
  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <div
          className={`col-12 p-0 ml-auto mr-auto  ${
            props.location.pathname === "/interpretly" ||
            props.location.pathname === "/interpretly/"
              ? ""
              : "row"
          }`}
        >
          {props.location.pathname === "/interpretly" ||
          props.location.pathname === "/interpretly/" ? null : (
            <Navbar />
          )}
          <ToastifyAlert style={{ zIndex: "1" }} />
          <Switch>
            <AppRoute
              exact
              path="/interpretly"
              component={Home}
              layout={LayoutDefault}
            />
            <Route exact path="/interpretly/dashboard" component={Dashboard} />
            <Route exact path="/interpretly/profile" component={Profile} />
            <Route exact path="/interpretly/request" component={JobRequests} />
            <Route exact path="/interpretly/schedule" component={Schedule} />
            <Route exact path="/interpretly/completed" component={Completed} />
            <Route
              exact
              path="/interpretly/full"
              component={FullViewjobRequest}
            />
            <Route
              exact
              path="/interpretly/notification"
              component={Notification}
            />
            <Route exact path="/interpretly/message" component={Message} />
            <Route component={Error} />
          </Switch>
        </div>
      )}
    />
  );
};

export default withRouter(App);

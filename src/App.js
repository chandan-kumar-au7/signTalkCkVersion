import React, { useRef, useEffect, useState } from "react";
import {
  useLocation,
  Switch,
  Route,
  withRouter,
  useHistory,
} from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import "./App.css";
import Navbar from "./components/LargeComponent/dashboard/Navbar";
import Dashboard from "./components/LargeComponent/dashboard/Dashboard";
import Profile from "./components/LargeComponent/Profile/Profile";
import JobRequests from "./components/LargeComponent/jobRequests/JobRequests";
import Schedule from "./components/LargeComponent/Schedule/Schedule";
import Completed from "./components/LargeComponent/completed/Completed";
import Notification from "./components/LargeComponent/Notification/Notification";
import Message from "./components/LargeComponent/Message/Message";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
import { ToastifyAlert } from "../src/components/AlertComponent/ToastifyAlert";
// Views
import Home from "./views/Home";
import Error from "./views/Error";

import AsidebarClient from "./dashboradClient/Asidebar/Asidebar";
import DashboardClient from "./dashboradClient/DashboardClient/DashboardClient";
import MeetingClient from "./dashboradClient/MeetingsClient/Meeting";
import CompletedClient from "./dashboradClient/Completed/Completed";
import MessagesClient from "./dashboradClient/MessagesClient/Messages";
import NotificationClient from "./dashboradClient/NotificationClient/Notification";
import ProfileClient from "./dashboradClient/ProfileClient/Profile";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = (props) => {
  const history = useHistory();

  const [Token, setToken] = useState(null);
  const [ctoken, setcToken] = useState(null);

  useEffect(() => {
    let iToken = localStorage.getItem("token");
    let cToken = localStorage.getItem("cToken");
    // console.log(cToken);
    if (iToken) {
      setToken(iToken);
    } else if (cToken) {
      setcToken(cToken);
    } else {
      history.push("/interpretly");
    }
  }, [Token, ctoken]);

  const childRef = useRef();
  let location = useLocation();
  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  useEffect(() => {
    if (Token !== null) {
      props.history.push("/interpretly/dashboard");
    }
    if (ctoken !== null) {
      props.history.push("/interpretly/dashboardclient");
    }
  }, []);
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
          (props.location.pathname === "/interpretly" &&
            Token === null) ? null : ctoken !== null ? (
            <AsidebarClient />
          ) : (
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
              path="/interpretly/notification"
              component={Notification}
            />
            <Route exact path="/interpretly/message" component={Message} />

            <Route
              exact
              path="/interpretly/asidebarclient"
              component={AsidebarClient}
            />

            <Route
              exact
              path="/interpretly/dashboardclient"
              component={DashboardClient}
            />
            <Route
              exact
              path="/interpretly/meetingclient"
              component={MeetingClient}
            />
            <Route
              exact
              path="/interpretly/completedclient"
              component={CompletedClient}
            />
            <Route
              exact
              path="/interpretly/messageclient"
              component={MessagesClient}
            />
            <Route
              exact
              path="/interpretly/notificationclient"
              component={NotificationClient}
            />
            <Route
              exact
              path="/interpretly/profileclient"
              component={ProfileClient}
            />

            <Route component={Error} />
          </Switch>
        </div>
      )}
    />
  );
};

export default withRouter(App);

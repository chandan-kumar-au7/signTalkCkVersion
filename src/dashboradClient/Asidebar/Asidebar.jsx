import React from "react";
import { NavLink } from "react-router-dom";
import SignTalkLogo from "../../assets/images/slogo.png";
import "./Asidebar.css";
import {
  CheckSquare,
  Grid,
  PlusSquare,
  UserCheck,
  Send,
  Bell,
} from "react-feather";

function Asidebar() {
  return (
    <div className="col-2 c0 pt-5 float-left">
      <NavLink
        className="col-12 p-2 d-block rounded f15 AsideLogoParent"
        to="/interpretly/dashboardclient"
      >
        <div className="AsideLogoParenttwo">
          <img className="AsideLogo" src={SignTalkLogo} alt="" />
          <span className="AsideLogoName">SignTalk</span>
        </div>
      </NavLink>
      <div className="tasks">Tasks</div>
      <NavLink
        activeClassName="activeclassname"
        className="col-12 p-2 d-block rounded f15 asidelinks"
        to="/interpretly/dashboardclient"
      >
        <Grid className="d-inline mr-2" size="18" /> Dashboard
      </NavLink>
      <NavLink
        activeClassName="activeclassname"
        className="col-12 p-2 d-block rounded f15 asidelinks"
        to="/interpretly/meetingclient"
      >
        <PlusSquare className="d-inline mr-2" size="18" /> Meetings
      </NavLink>

      <NavLink
        activeClassName="activeclassname"
        className="col-12 p-2 d-block rounded f15 asidelinks"
        to="/interpretly/completedclient"
      >
        <CheckSquare className="d-inline mr-2" size="18" /> Completed
      </NavLink>

      {/* ============= {{{{{{{{{{{{}}}}}}}}}}}} =============*/}
      <div className="bottom_divss">
        <NavLink
          activeClassName="activeclassname"
          className="col-12 p-2 d-block rounded f15 asidelinks"
          to="/interpretly/messageclient"
        >
          <Send className="d-inline mr-2" size="18" /> Messages
        </NavLink>

        <NavLink
          activeClassName="activeclassname"
          className="col-12 p-2 d-block rounded f15 asidelinks"
          to="/interpretly/notificationclient"
        >
          <Bell className="d-inline mr-2" size="18" /> Notifications
        </NavLink>

        <NavLink
          activeClassName="activeclassname"
          className="col-12 p-2 d-block rounded f15 asidelinks"
          to="/interpretly/profileclient"
        >
          <UserCheck className="d-inline mr-2" size="18" /> Profile
        </NavLink>
      </div>
      {/* ============= {{{{{{{{{{{{}}}}}}}}}}}} =============*/}
    </div>
  );
}

export default Asidebar;

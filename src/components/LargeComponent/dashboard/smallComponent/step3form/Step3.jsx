import React from "react";
import "../../../style.css";
// import Select from 'react-select'
import { withStyles } from "@material-ui/core/styles";
import { Select, MenuItem, InputBase } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcaseMedical,
  faUniversity,
  faLaptopCode,
  faCogs,
  faHandHoldingUsd,
  
} from "@fortawesome/free-solid-svg-icons";

function Step3({ state, setState }) {
  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      textAlign: "left",
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "white",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);

  let icons = {
    0: <FontAwesomeIcon icon={faBriefcaseMedical} className='mr-2' />,
    1: <FontAwesomeIcon icon={faUniversity} className='mr-2' />,
    2: <FontAwesomeIcon icon={faLaptopCode} className='mr-2' />,
    3: <FontAwesomeIcon icon={faCogs} className='mr-2' />,
    4: <FontAwesomeIcon icon={faHandHoldingUsd} className='mr-2'/>
  };

  return (
    <div>
      <h5 className='text-light' style={{ fontWeight: "lighter" }}>
        Tell us about yourself
      </h5>
      <p className='smallFont'>Where do you work</p>
      <div className=' p-0 ml-auto mr-auto mb-3'>
        <Select
          labelId='demo-customized-select-label'
          id='demo-customized-select'
          className='col-8 bg-light rounded'
          value={state.selectedWork}
          onChange={(e) => setState({ ...state, selectedWork: e.target.value })}
          input={<BootstrapInput />}>
          {state.works.map((item, index) => (
            <MenuItem key={item.value} value={item.value}>
              {icons[index]}
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default Step3;

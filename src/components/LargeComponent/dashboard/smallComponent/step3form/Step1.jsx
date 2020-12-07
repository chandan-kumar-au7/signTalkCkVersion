import React from "react";
import "../../../style.css";
// import Axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Select, MenuItem, InputBase } from "@material-ui/core";

const Step1 = ({ state, setState }) => {
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

  return (
    <div>
      <h5 className='text-light mt-3 mb-3' style={{ fontWeight: "lighter" }}>
        Enter Your City
      </h5>
      <p className='smallFont mb-2'>Pick a city</p>
      <Select
        labelId='demo-customized-select-label'
        id='demo-customized-select'
        className='col-8 bg-light rounded'
        value={state.region}
        onChange={(e) => setState({ ...state, region: e.target.value })}
        input={<BootstrapInput />}>
        <MenuItem value=''>
          <em>Select city</em>
        </MenuItem>
        <MenuItem value={"Delhi"}>Delhi</MenuItem>
        <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
        <MenuItem value={"Hydrabad"}>Hyderabad</MenuItem>
        <MenuItem value={"Chennai"}>Chennai</MenuItem>
        <MenuItem value={"Others"}>Others</MenuItem>
      </Select>

      <p className='smallFont mt-3 mb-3'>
        *Select others if you can't find your city
      </p>
    </div>
  );
};

export default Step1;

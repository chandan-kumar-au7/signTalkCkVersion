import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
function Step4({ setSteps }) {
  const [showOther, setshowOther] = useState(false);

  return (
    <div className="step1parent">
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: 300,
          fontSize: "1em",
        }}
      >
        Did your meeting end at
        <br />
        <span className="textcolorblue"> 10:30 AM ?</span>
      </p>

      <RadioGroup
        defaultValue="yes"
        aria-label="yes"
        name="customized-radios"
        className="inputFieldForStep3parent"
      >
        <div className="childofinputStep3">
          <FormControlLabel
            value="yes"
            onClick={() => setshowOther(false)}
            control={<StyledRadio />}
            label="Yes"
          />
        </div>
        <div className="childofinputStep3">
          <FormControlLabel
            value="no"
            onClick={() => setshowOther(true)}
            control={<StyledRadio />}
            label="No"
          />
        </div>
      </RadioGroup>

      {showOther === true && (
        <>
          <p>How long was the meeting delayed?</p>
          <RadioGroup
            aria-label="delayed"
            name="customized-radios"
            className="extrainputFieldForStep3"
          >
            <div className="childofinputStep3">
              <FormControlLabel
                value="+15min"
                control={<StyledRadio />}
                label="More than 15 minutes"
              />
            </div>
            <div className="childofinputStep3">
              <FormControlLabel
                value="+30min"
                control={<StyledRadio />}
                label="More than 30 minutes"
              />
            </div>
            <div className="childofinputStep3">
              <FormControlLabel
                value="+45min"
                control={<StyledRadio />}
                label="More than 45 minutes"
              />
            </div>
            <div className="childofinputStep3">
              <FormControlLabel
                value="+1hour"
                control={<StyledRadio />}
                label="More than an Hour"
              />
            </div>
          </RadioGroup>
        </>
      )}

      <button
        className="InitiatePaymentbtn continuebtn"
        onClick={() => setSteps(5)}
      >
        Continue
      </button>
    </div>
  );
}

export default Step4;

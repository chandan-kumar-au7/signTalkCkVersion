import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import SectionHeader from "./partials/SectionHeader";
import { PopupComponent } from "../elements/PopupComponent";
import { centralStyle } from "../elements/centralStyle";
import SignUpLogin from "../LargeComponent/SignUpLogin";
import VerifyModal from "../LargeComponent/SignUpverificationModal";
// import ClientJobPost from "../Client/JobPost/ClientJobPost";
import "react-responsive-modal/styles.css";
import "./Hero.css";
import { Link } from "react-router-dom";
// import OnBoard from "../Client/OnBoard";
// import ReactModal from "react-responsive-modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};
export const vl = {
  borderLeft: "3px solid ",
  height: "100px",
  marginLeft: "110px",
};
export const hl = {
  borderLeft: "0px 3px solid ",
  height: "10px",
  width: "30px",
  backgroundColor: "#AB57FF",
  borderRadius: "5px",
  margin: "auto",
  marginBottom: "3rem",
  marginTop: "-3rem",
};

export const ButtonHero = {
  width: "238px",
  borderRadius: "4px",
};
const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [modalState, setmodalState] = useState(false);
  const [clicked, setClicked] = useState("");
  const [verify, setVerify] = useState(null);

  if (verify !== null && verify.details !== undefined) {
    setVerify(verify.details[0].email);

    setmodalState(false);
  }
  useEffect(() => {
    if (verify != null && verify.details === undefined) {
      setmodalState(false);
    }
  }, [verify]);
  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );
  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  const sectionHeader = {
    title: "About Interpretly",
    paragraph: "",
  };

  useEffect(() => {
    localStorage.removeItem("isign");
    localStorage.removeItem("csign");
  });

  return (
    <section {...props} className={outerClasses}>
      <div id="hero" className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Welcome to{" "}
              <span className="text-color-primary">Interpretly!</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                A hassle free way to connect to sign language interpreters.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <div className="row mt-5">
                  <div className="col-4">
                    {" "}
                    <div className="row">
                      <div className="col-12">
                        <label className="ml-5" style={centralStyle.Label}>
                          Need assistance
                        </label>
                      </div>
                      <div className="col-12">
                        <Link to="interpretly/client/onboard">
                          <Button
                            color="primary"
                            style={ButtonHero}
                            wideMobile
                            // onClick={() => {
                            //   setClicked("left");
                            //   setmodalState((o) => !o);
                            // }}
                          >
                            Looking for an Interpreter
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    {" "}
                    <div style={vl} color="primary"></div>
                  </div>
                  <div className="col-4">
                    {" "}
                    <div className="row">
                      <div className="col-12">
                        <label className="ml-5" style={centralStyle.Label}>
                          Want to help
                        </label>
                      </div>
                      <div className="col-12">
                        <Button
                          color="secondary"
                          style={ButtonHero}
                          wideMobile
                          onClick={() => {
                            setClicked("right");
                            setmodalState((o) => !o);
                          }}
                        >
                          I am an Interpreter
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <VerifyModal verify={verify} />
          {clicked === "left"
            ? null
            : // <ReactModal
              //     open={clicked == 'left'}
              //     onClose={()=> {
              //       setClicked("")
              //       setmodalState(false)
              //     }}
              //     classNames={{
              //       modal : 'client-job-modal'
              //     }}
              //     center
              //   >
              //   <ClientJobPost
              //     closeModal={setClicked}
              //     setVerify={setVerify}
              //     clicked={clicked}
              //     modalState={modalState}
              //     setmodalState={setmodalState}
              //   />
              // </ReactModal>
              clicked === "right" && (
                <PopupComponent
                  Content={
                    <SignUpLogin
                      setVerify={setVerify}
                      clicked={clicked}
                      modalState={modalState}
                      setmodalState={setmodalState}
                    />
                  }
                  modalState={modalState}
                  setmodalState={setmodalState}
                />
              )}
          {/* <VerifyModal verify={verify} />
          {clicked === "left" ? (
            <ReactModal
              open={clicked == "left"}
              onClose={() => {
                setClicked("");
                setmodalState(false);
              }}
              classNames={{
                modal: "client-job-modal",
              }}
              center
            >
              <ClientJobPost
                closeModal={setClicked}
                setVerify={setVerify}
                clicked={clicked}
                modalState={modalState}
                setmodalState={setmodalState}
              />
            </ReactModal>
          ) : (
            clicked === "right" && (
              <PopupComponent
                Content={
                  <SignUpLogin
                    setVerify={setVerify}
                    clicked={clicked}
                    modalState={modalState}
                    setmodalState={setmodalState}
                  />
                }
                modalState={modalState}
                setmodalState={setmodalState}
              />
            )
          )} */}

          <SectionHeader data={sectionHeader} className="center-content" />
          <div color="primary" style={hl}></div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/rexj4NHTQUU?autoplay=1"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

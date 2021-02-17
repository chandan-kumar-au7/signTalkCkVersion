import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import { Divider, Grid, Fab, InputBase } from "@material-ui/core";
import Avatar from "react-avatar";
import { Dropdown } from "semantic-ui-react";
import { Button, Form } from "semantic-ui-react";

import {
  Edit,
  StarBorder,
  CheckCircleOutlineOutlined,
  ChevronRight,
} from "@material-ui/icons";

import Navbar from "../Navbar/Navbar";
import RatingSection from "./RatingSection";
import Spinner from "../../components/LargeComponent/dashboard/smallComponent/Spinner";

import { PopupComponent } from "../../components/elements/PopupComponent";

import {
  notifySucess,
  notifyWarning,
} from "../../components/AlertComponent/ToastifyAlert";

import PaymentOption from "../PaymentMethod/PaymentOption";

import "./Profile.css";

const styleObject = { fontSize: "16px", color: "white", marginRight: "1em" };

function Profile(props) {
  const history = useHistory();

  const base = "https://whispering-lake-75400.herokuapp.com";

  let [profileimageModel, setprofileimageModel] = useState(false);
  const [file, setFile] = useState(null);
  let [language, setlanguage] = useState([]);
  let [Background, setBackground] = useState([]);
  let [region, setregion] = useState("");

  let [languageforgettingval, setlanguageforgettingval] = useState("");
  let [Backgroundforgettingval, setBackgroundforgettingval] = useState("");

  let [name, setName] = useState("");
  let [show, setShow] = useState("");
  let [email, setemail] = useState("");
  let [mobile, setmobile] = useState("");
  let [image, setimage] = useState("");

  const [loading, setLoading] = useState(false);

  const [showName, setshowName] = useState(false);
  const [showNumber, setshowNumber] = useState(false);
  const [showEmail, setshowEmail] = useState(false);
  const [div1per, setdiv1per] = useState(0);

  const [ProfilePic, setProfilePic] = useState("");

  const [ShowPaymentMethod, setShowPaymentMethod] = useState(false);

  // const [jsonData, setjsonData] = useState([]);

  const Reginset = [
    { key: 1, text: "Bangalore", value: 1 },
    { key: 2, text: "Delhi", value: 2 },
    { key: 3, text: "Mumbai", value: 3 },
    { key: 4, text: "Chennai", value: 4 },
    { key: 5, text: "Hydrabad", value: 5 },
    { key: 6, text: "Other", value: 6 },
  ];
  const Backgroundset = [
    { key: 1, text: "Software", value: "Software" },
    { key: 2, text: "Education", value: "Education" },
    { key: 3, text: "Police", value: "Police" },
    { key: 4, text: "Healthcare", value: "Healthcare" },
    { key: 5, text: "Banking", value: "Banking" },
    { key: 6, text: "Energy", value: "Energy" },
    { key: 7, text: "Legal", value: "Legal" },
    { key: 8, text: "Media", value: "Media" },
    { key: 9, text: "Agriculture", value: "Agriculture" },
    { key: 10, text: "Technical", value: "Technical" },
    { key: 11, text: "Construction", value: "Construction" },
    { key: 12, text: "Other", value: "Other" },
  ];

  // const handleChange1 = (e, data) => {
  //   let langStr = [];
  //   // console.log("e ====== >>>>> ", e);
  //   // console.log("data ====== >>>>> ", data);

  //   langStr.push(data.value);
  //   // console.log("langStr @@ ", langStr);

  //   if (langStr.length === 1) {
  //     // setlanguage(langStr[0])
  //     setlanguageforgettingval(langStr[0]);
  //   } else {
  //     langStr.map((data) => {
  //       // setlanguage(data + ",");
  //       setlanguageforgettingval(data + ",");
  //       return null;
  //     });
  //   }
  // };

  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange3 = async (e, data) => {
    let backgroundStr = [];

    backgroundStr.push(data.value);

    if (backgroundStr.length === 1) {
      setBackgroundforgettingval(backgroundStr[0]);
    } else {
      backgroundStr.map((data) => {
        // setBackground(data + ",");
        setBackgroundforgettingval(data + ",");
        return null;
      });
    }
  };

  const ContentPic = () => (
    <>
      <div id="nobox" className="col-12 mb-5 " style={{ marginLeft: "30%" }}>
        {" "}
        Uplaod Your Profile Picture
      </div>
      <div id="nobox" className="col-12 " style={{ marginLeft: "30%" }}>
        {" "}
        <Form.Field>
          <input type="file" onChange={handleChangeFile} className="mb-3" />
          <Button type="submit" onClick={handleFileUpload}>
            Upload
          </Button>
        </Form.Field>
      </div>
    </>
  );

  // handling image upload of user profile
  const handleFileUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // console.log("file ==========>>>>>>>> ", file);
    if (file !== null) {
      setLoading(true);
      setprofileimageModel(false);
      formData.append("image", file);
      let data = await Axios.post(`${base}/Home/dp`, formData, {
        headers: {
          "content-type": "multipart/form-data",
          token: localStorage.getItem("token"),
        },
      });

      setProfilePic(data);
      setimage(data.data.user.image);
      notifySucess("profile updated");
      setprofileimageModel(false);
      history.push("/interpretly/profile");

      // console.log(data);
    } else {
      setprofileimageModel(false);
      notifyWarning("Select Your Pic first ");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    var res = name.split(" ");
    // console.log("splitted name ", res[0], res[1]);

    try {
      if (Background.length < 1) {
        notifySucess("background is required");
        setLoading(false);
      } else {
        let { data } = await Axios({
          method: "patch",
          url: `${base}/Home/profile`,
          data: {
            Background: Background,
            region: region,
            firstName: res[0],
            lastName: res[1],
          },
          headers: {
            token: localStorage.getItem("cToken"),
          },
        });

        notifySucess(" profile updated!");
        setShow("");
        history.push("/interpretly/profile");
      }
      // console.log(data);
    } catch (err) {
      // console.log(err);
      setLoading(false);
      notifyWarning(err.message);
    }
  };

  const UploadImage = (e) => {
    e.preventDefault();

    setprofileimageModel(true);
  };

  let handleDisplay = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  // useEffect(() => {
  //   let decoded;
  //   let currentTime;

  //   const token = localStorage.getItem("cToken");
  //   if (token) {
  //     decoded = jwt_decode(token);
  //     currentTime = Date.now() / 1000;
  //   }

  //   if (!token) {
  //     history.push("/interpretly");
  //     notifyWarning("you must be logged in");
  //   } else if (decoded.exp < currentTime) {
  //     notifyWarning("login required");
  //     history.push("/interpretly");
  //   } else {
  //     async function func1() {
  //       setLoading(true);
  //       const { data } = await Axios({
  //         method: "get",
  //         url: `${base}/Home/profile`,
  //         headers: {
  //           token: token,
  //         },
  //       });

  //       console.log("this is response ===> ", data);

  //       if (data) {
  //         setLoading(false);

  //         // console.log("user_data ", data);
  //         setlanguage(data.user.language);
  //         setlanguageforgettingval(data.user.language);
  //         setBackgroundforgettingval(data.user.Background);
  //         setBackground(data.user.Background);
  //         setemail(data.user.email);
  //         setimage(data.user.image);
  //         setmobile(data.user.mobile_no);
  //         setregion(data.user.region);
  //         setName(data.user.firstName + " " + data.user.lastName);

  //         setdiv1per("4.8");
  //       }
  //     }

  //     func1();
  //   }
  // }, [history, ProfilePic, Update]);

  useEffect(() => {
    setLoading(true);
    setlanguage("Hindi,English");
    setlanguageforgettingval("Hindi,English");
    setBackgroundforgettingval("Private Sector");
    setBackground("Private Sector");
    setemail("C1234@gmail.com");
    setimage(
      "https://cdn.pixabay.com/photo/2014/12/10/20/48/medic-563425__340.jpg"
    );
    setmobile("8329238828");
    setregion("Banglore, Karnataka");
    setName("Neo Hospital");

    setdiv1per("4.8");

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      className="col-10 ml-auto c0 p-0"
      style={{
        Width: "44.271vw",
        position: "relative",
      }}
    >
      <Spinner loading={loading} />
      {ShowPaymentMethod ? (
        <PaymentOption SetShowPaymentMethod={setShowPaymentMethod} />
      ) : (
        <>
          {/* -------------- navbar ----------------- */}
          <Navbar title={"Profile"} />

          {/* user profile */}
          <div className="row profile-centered" style={{ fontSize: "14px" }}>
            <div
              style={{
                borderRadius: "50%",
                width: "8rem",
                marginTop: "1rem",
                marginLeft: "-20px",
              }}
            >
              <Avatar
                name={name}
                size="150"
                textSizeRatio={1.75}
                round={true}
                src={image}
              />
              <label
                style={{
                  marginLeft: "6rem",
                  zIndex: "+10",
                }}
                htmlFor="img"
              >
                <Fab
                  onClick={UploadImage}
                  style={{
                    marginTop: "-6rem",
                    width: "2rem",
                    height: "2rem",
                    position: "relative",
                  }}
                  color="secondary"
                  aria-label="edit"
                >
                  <Edit />
                </Fab>
              </label>
              <div
                className="col"
                style={{
                  display: "inline-flex",
                  fontSize: "16px",
                  height: "30px",
                }}
              >
                <StarBorder style={{ color: "#24e5af" }} />
                <b style={{ margin: "3px" }}> {div1per} / 5.0 </b>
              </div>
            </div>

            <div className="col-sm-9 p-4 mb-3" style={{ marginTop: "-1rem" }}>
              {show ? (
                <div style={{ lineHeight: "2.8rem", fontSize: "20px" }}>
                  <span
                    style={{
                      color: "white",
                      fontSize: "30px",
                      textTransform: "capitalize",
                      position: "relative",
                      marginRight: "40px",
                    }}
                  >
                    <b>{name}</b>
                  </span>
                  {showName === false ? (
                    <Link
                      to="#"
                      className="far fa-edit"
                      style={{ color: "#7e21db" }}
                      onClick={() => setshowName(false)}
                    >
                      Edit Name
                    </Link>
                  ) : (
                    <InputBase
                      placeholder="FirstName LastName"
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        background: "white",
                        borderRadius: "5px",
                        // padding: "10px",
                      }}
                    />
                  )}
                  {/* ==================== number ============================ */}

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      Phone No.
                    </Grid>

                    <Grid item xs={1} sm={1}>
                      :
                    </Grid>

                    <Grid item xs={12} sm={8}>
                      <div
                        className="col-12"
                        style={{ paddingTop: ".8rem", marginLeft: "-1rem" }}
                      >
                        <p className="m-0 mb-2">
                          <span style={styleObject} className="mr-2">
                            {mobile === "" ? "UnRegistered" : mobile}
                          </span>
                          <span style={{ marginLeft: ".8em" }}>
                            {mobile === "" ? (
                              <CheckCircleOutlineOutlined
                                style={{ color: "red" }}
                              />
                            ) : (
                              <CheckCircleOutlineOutlined
                                style={{ color: "#24e5af" }}
                              />
                            )}
                          </span>
                          {showNumber === false ? (
                            <Link
                              to="#"
                              style={{
                                color: "#7e21db",
                                marginLeft: "2rem",
                                fontSize: "14px",
                              }}
                              onClick={() => setshowNumber(false)}
                            >
                              Change Number
                            </Link>
                          ) : (
                            <InputBase
                              placeholder="Change Number"
                              onChange={(e) => setmobile(e.target.value)}
                              style={{
                                background: "white",
                                borderRadius: "5px",
                              }}
                            />
                          )}
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                  {/* ==================== Email ============================ */}

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      Email
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      :
                    </Grid>

                    <Grid item xs={12} sm={8}>
                      <div
                        className="col-12"
                        style={{ paddingTop: ".8rem", marginLeft: "-1rem" }}
                      >
                        <p className="m-0 mb-2 ">
                          <span style={styleObject}>
                            {email === ""
                              ? "no-email"
                              : email.search("@") == "-1"
                              ? "Social Login"
                              : email}
                          </span>
                          <span style={{ marginLeft: ".8rem" }}>
                            {email === "" ? (
                              <CheckCircleOutlineOutlined
                                style={{ color: "red" }}
                              />
                            ) : (
                              <CheckCircleOutlineOutlined
                                style={{ color: "#24e5af" }}
                              />
                            )}
                          </span>
                          {showEmail === false ? (
                            <Link
                              to="#"
                              style={{
                                color: "#7e21db",
                                marginLeft: "2rem",
                                fontSize: "14px",
                              }}
                              onClick={() => setshowEmail(false)}
                            >
                              Change Email
                            </Link>
                          ) : (
                            <InputBase
                              placeholder="Change Email"
                              onChange={(e) => setemail(e.target.value)}
                              style={{
                                background: "white",
                                borderRadius: "5px",
                              }}
                            />
                          )}
                        </p>
                      </div>
                    </Grid>
                  </Grid>

                  {/* ==================== Region / Location ============================ */}

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      Location
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      :
                    </Grid>

                    <Grid item xs={12} sm={8}>
                      <div
                        id="dropdown"
                        style={{
                          display: show ? "block" : "none",
                          fontSize: "14px",
                        }}
                      >
                        <Dropdown
                          style={{ width: "15rem" }}
                          placeholder={region}
                          selectOnBlur={false}
                          selection
                          search
                          options={Reginset}
                          onChange={(e) => setregion(e.target.textContent)}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  {/* ==================== Background ============================ */}

                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      Org. Type.
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      :
                    </Grid>

                    <Grid item xs={12} sm={8}>
                      <div
                        id="dropdown"
                        style={{
                          display: show ? "block" : "none",

                          fontSize: "14px",
                        }}
                      >
                        <Dropdown
                          multiple
                          style={{ width: "15rem" }}
                          placeholder={Background}
                          selectOnBlur={false}
                          selection
                          search
                          value={Backgroundforgettingval}
                          options={Backgroundset}
                          onChange={handleChange3}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <>
                  <p
                    style={{
                      color: "white",
                      fontSize: "30px",
                      textTransform: "capitalize",
                    }}
                  >
                    <b>{name}</b>
                  </p>
                  {/* ======================= {{{{{{{{{{{{{{ user details }}}}}}}}}}}}}} ======================= */}

                  <Grid container>
                    {/* 1 */}

                    <Grid container spacing={2} sm={6}>
                      <Grid sm={3} item>
                        Mobile :
                      </Grid>
                      <Grid item>
                        <span style={styleObject}>
                          {mobile === "" ? "Registered" : mobile}
                        </span>
                        {mobile === "" ? (
                          <CheckCircleOutlineOutlined
                            style={{ color: "red" }}
                          />
                        ) : (
                          <CheckCircleOutlineOutlined
                            style={{ color: "#24e5af" }}
                          />
                        )}
                      </Grid>
                    </Grid>

                    {/* 2 */}

                    <Grid container spacing={2} sm={6}>
                      <Grid sm={4} item>
                        Location :
                      </Grid>
                      <Grid item sm={8}>
                        <span style={styleObject}>
                          {region === "" ? "update your region" : region}
                        </span>
                      </Grid>
                    </Grid>

                    {/* 3 */}

                    <Grid
                      container
                      spacing={2}
                      sm={6}
                      style={{ marginTop: "10px" }}
                    >
                      <Grid sm={3} item>
                        Email :
                      </Grid>
                      <Grid item>
                        <p>
                          <span style={styleObject}>
                            {email === ""
                              ? "no-email"
                              : email.search("@") == "-1"
                              ? "Social Login"
                              : email}
                          </span>
                          {email === "" ? (
                            <CheckCircleOutlineOutlined
                              style={{ color: "red" }}
                            />
                          ) : (
                            <CheckCircleOutlineOutlined
                              style={{ color: "#24e5af" }}
                            />
                          )}
                        </p>
                      </Grid>
                    </Grid>

                    {/* 4 */}

                    <Grid
                      container
                      spacing={2}
                      sm={6}
                      style={{ marginTop: "10px" }}
                    >
                      <Grid sm={4} item>
                        Org. Type :
                      </Grid>
                      <Grid item sm={8}>
                        <span style={styleObject}>
                          {Background && Background.length === 0
                            ? "update your Background"
                            : Background}
                        </span>
                      </Grid>
                    </Grid>

                    {/* 5 */}

                    <Grid
                      container
                      spacing={2}
                      sm={7}
                      style={{
                        marginTop: "10px",
                        fontSize: "12px",
                        color: "#7e21db",
                      }}
                    >
                      <Grid item>Account Settings</Grid>
                      <Grid
                        className="PaymentMethods"
                        onClick={() => setShowPaymentMethod(true)}
                        item
                      >
                        Payment Methods
                      </Grid>
                      <Grid item>PrivAcy Policy</Grid>
                    </Grid>

                    {/* 7 */}

                    <Grid
                      container
                      spacing={2}
                      sm={7}
                      style={{
                        marginTop: "10px",

                        color: "#7e21db",
                      }}
                    >
                      <Grid
                        item
                        style={{
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                        onClick={() => {
                          localStorage.removeItem("token");
                          let Ctoken = localStorage.getItem("cToken");
                          if (Ctoken != null) {
                            localStorage.removeItem("cToken");
                          }
                          history.push("/interpretly");
                        }}
                      >
                        LogOut <ChevronRight />
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              )}
            </div>
          </div>

          {/* end of user profile */}

          <span className="row p-3 text-center ">
            {show ? (
              <></>
            ) : (
              <>
                <Link
                  to="#"
                  className="far fa-edit"
                  style={{
                    color: "#7e21db",
                    // left: "75%",
                    position: "absolute",
                    top: "20vh",
                    left: "60vw",
                  }}
                  onClick={handleDisplay}
                >
                  Edit Details
                </Link>
              </>
            )}

            <Grid container spacing={2} style={{ marginTop: "-3rem" }}>
              <Grid item xs={12} sm={4}>
                <Button
                  onClick={handleSave}
                  style={{
                    color: "white",
                    float: "right",
                    outline: "none",
                    border: "none",
                    display: show ? "block" : "none",
                    background: "#7e21db",
                  }}
                >
                  Save Changes
                </Button>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Button
                  onMouseEnter={(e) => (e.target.style.background = "#7e21db")}
                  onMouseLeave={(e) => (e.target.style.background = "#171717")}
                  onClick={handleDisplay}
                  style={{
                    color: "white",
                    background: "#171717",
                    display: show ? "block" : "none",
                    border: "2px solid #7e21db",
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </span>

          <PopupComponent
            modalState={profileimageModel}
            setmodalState={setprofileimageModel}
            Content={ContentPic()}
          />

          <br />
          <br />

          <Divider
            variant="middle"
            style={{
              height: "1px",
              background: "grey",
              width: "96.5%",
              margin: "-10vh 0em 2em 1em",
            }}
          />

          {/* ====================== Rating sestion ==============  */}
          <div style={{ marginLeft: "-30px", marginBottom: "40vh" }}>
            <RatingSection />
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;

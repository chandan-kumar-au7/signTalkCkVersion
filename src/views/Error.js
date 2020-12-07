import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function Error() {
  return (
    <>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        style={{ marginLeft: "10rem" }}>
        <h3>OPPS !!! , Looks Like , You Typed Wrong Url ...</h3>
      </Grid>
      <br />
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        style={{ marginLeft: "10rem" }}>
        <Button variant='outlined' color='primary'>
          <Link to='/interpretly'>Go_to_HOME</Link>
        </Button>
      </Grid>
    </>
  );
}

export default Error;

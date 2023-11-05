import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent } from "@mui/material";


export const NavBar = () => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Card>
            <img
              className="imglogo"
              src="images/PickupBizHostelLogo.png"
              alt="PickupBiz"
            />
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Link to="/frontdesk">Front Desk</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Link to="/admin">Admin</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Link to="/eshopp">e-Shopp</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <Link to="/chain">Chaning</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <Link to="/chat">Chat App</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <Link to="/login">Login</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <Link to="/signup">Sign Up</Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

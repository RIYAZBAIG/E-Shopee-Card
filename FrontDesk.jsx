import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, TextField, Button } from "@mui/material";

export const FrontDesk = () => {
  const [user, setUser] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const handleStore = () => {
    sessionStorage.setItem("username", user);
    sessionStorage.setItem("cityname", city);
    localStorage.setItem("age", age);
  };
  return (
    <div className="sub">
      <h3>FrontDesk</h3>
      <TextField
        label="User Name"
        variant="outlined"
        onChange={(e) => setUser(e.target.value)}
      />
      <TextField
        label="City"
        variant="outlined"
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        label="Age"
        variant="outlined"
        onChange={(e) => setAge(e.target.value)}
      />
      <Button variant="contained" onClick={handleStore}>
        Store Data
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Link to="/frontdesk/manageroom">Manage Room</Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Link to="/frontdesk/roomlist">Room List</Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

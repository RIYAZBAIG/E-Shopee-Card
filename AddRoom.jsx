import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Grid, Button } from "@mui/material";

export const AddRoom = () => {
  const rows = JSON.parse(localStorage.getItem("roomdata"));
  const [roomdata, setRoomdata] = useState([...rows]);
  const [roomno, setRoomno] = useState(0);
  const [roomcap, setRoomcap] = useState(0);
  const [roomsize, setRoomsize] = useState(0);
  const [nobeds, setNobeds] = useState(0);
  const AddRoomToStore = () => {
    const obj = {
      id: uuidv4(),
      roomno: roomno,
      roomcap: roomcap,
      roomsize: roomsize,
      nobeds: nobeds,
    };
    setRoomdata([...roomdata, obj]);
  };

  const handleSubmit = () => {
    console.log(roomdata);
    localStorage.setItem("roomdata", JSON.stringify(roomdata));
  };

  return (
    <div className="sub">
      <Grid container spacing="3">
        <Grid item xs={3}>
          <TextField
            label="Room Number"
            variant="outlined"
            onChange={(e) => setRoomno(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Room Capacity"
            variant="outlined"
            onChange={(e) => setRoomcap(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Room Size"
            variant="outlined"
            onChange={(e) => setRoomsize(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Number Of Beds"
            variant="outlined"
            onChange={(e) => setNobeds(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={AddRoomToStore}>
            Add
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Cancel</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

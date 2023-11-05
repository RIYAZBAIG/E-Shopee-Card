import React from "react";
import { TextField, Grid, Button } from "@mui/material";

export const RemoveRoom = () => {
  return (
    <div className="sub">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField label="Room Number" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Delete Room</Button>
        </Grid>
      </Grid>
    </div>
  );
};

import React from "react";
import { TextField, Grid, Button } from "@mui/material";

export const MaintenanceOfRoom = () => {
  return (
    <div className="sub">
      <Grid container>
        <Grid item xs={3}>
          <TextField label="Room Number" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Cost" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>
    </div>
  );
};

import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Button } from "@mui/material";

export const RoomList = () => {
  const [isManager, setIsManager] = useState(true);
  const currUser = sessionStorage.getItem("username");
  const currCity = sessionStorage.getItem("cityname");
  const currAge = localStorage.getItem("age");
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "roomno", headerName: "Room Number", width: 190 },
    { field: "roomcap", headerName: "Room Capacity", width: 190 },
    { field: "roomsize", headerName: "Room Size (Sq. Ft)", width: 190 },
    { field: "nobeds", headerName: "Number of Beds", width: 190 },
  ];
  const columnsHK = [
    { field: "roomno", headerName: "Room Number", width: 190 },
    { field: "nobeds", headerName: "Number of Beds", width: 190 },
  ];

  const rows = JSON.parse(localStorage.getItem("roomdata"));
  return (
    <div className="sub3">
      <h3>
        Welcome {currUser} - {currAge} to Room List from {currCity}
      </h3>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button variant="contained" onClick={() => setIsManager(true)}>
            Manager
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" onClick={() => setIsManager(false)}>
            House Keeping
          </Button>
        </Grid>
      </Grid>
      <DataGrid
        rows={rows}
        columns={isManager ? columns : columnsHK}
        pageSize={5}
      />
    </div>
  );
};

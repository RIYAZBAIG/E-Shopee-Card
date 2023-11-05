import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { AddRoom } from "./AddRoom";
import { RemoveRoom } from "./RemoveRoom";
import { MaintenanceOfRoom } from "./MaintenaceOfRoom";

export const ManageRoom = () => {
  const [val, setVal] = useState("addroom");
  const currUser = sessionStorage.getItem("username");
  const currCity = sessionStorage.getItem("cityname");
  const currAge = localStorage.getItem("age");
  return (
    <React.Fragment>
      <h3>
        Welcome {currUser} - {currAge} to Manage Room from {currCity}
      </h3>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="addroom" label="Add Room" />
        <Tab value="removeroom" label="Remove Room" />
        <Tab value="maintenance" label="Maintenance of Room" />
      </Tabs>

      {val === "addroom" && <AddRoom />}
      {val === "removeroom" && <RemoveRoom />}
      {val === "maintenance" && <MaintenanceOfRoom />}
    </React.Fragment>
  );
};

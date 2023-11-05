import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid, CardContent } from "@mui/material";
export const Emp = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:5050/emp");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="sub">
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={3}>
            <Card>
              <CardContent>{item}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import axios from "axios";
import { EshoppItem } from "./EshoppItem";
import { Grid } from "@mui/material";

export const ChainProms = () => {
  const [data, setData] = useState([]);
  const getData2 = async () => {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    const reqUrl = `https://fakestoreapi.com/products/category/${result.data[1]}`;
    const prods = await axios.get(reqUrl);

    setData(prods.data);
  };
  const getData = () => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      const reqUrl = `https://fakestoreapi.com/products/category/${res.data[1]}`;

      axios.get(reqUrl).then((res) => setData(res.data));
    });
  };
  useEffect(() => {
    getData2();
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={3}>
            <EshoppItem prod={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

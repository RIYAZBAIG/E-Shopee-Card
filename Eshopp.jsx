import React, { useEffect, useState } from "react";
import axios from "axios";
import { EshoppItem } from "./EshoppItem";
import { Grid, Button } from "@mui/material";

export const Eshopp = () => {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [txtSearch, setTxtSearch] = useState("");
  const [txtCat, setTxtCat] = useState("");
  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setFiltData(result.data);
  };
  const getCategory = async () => {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCatData(result.data);
  };
  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toUpperCase().includes(txtSearch.toUpperCase()) ||
        item.description.toUpperCase().includes(txtSearch.toUpperCase()) ||
        item.category.toUpperCase().includes(txtSearch.toUpperCase())
    );
    setFiltData([...filtered]);
  }, [txtSearch]);

  useEffect(() => {
    const filtered = data.filter(
      (item) => item.category.toUpperCase() === txtCat.toUpperCase()
    );
    setFiltData([...filtered]);
  }, [txtCat]);

  useEffect(() => {
    getData();
    getCategory();
  }, []);
  return (
    <div className="sub2">
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <h3>Product E Shopp</h3>
        </Grid>
        <Grid item xs={4}>
          <input
            className="srch"
            type="text"
            onChange={(e) => setTxtSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          {catData.map((item) => (
            <Button
              className="btncat"
              variant="contained"
              onClick={() => setTxtCat(item)}
            >
              {item}
            </Button>
          ))}
        </Grid>
        {filtData.map((item) => (
          <Grid item xs={6}>
            <EshoppItem prod={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

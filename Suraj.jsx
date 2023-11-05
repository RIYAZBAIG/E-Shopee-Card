import React, { useState } from "react";
import { TextField, Button, Grid, SnackbarContent } from "@mui/material";

export const Suraj = ({
  txtChand,
  setTxtSuraj,
  txtSuraj,
  setIsSurajTyping,
}) => {
  const [txt, setTxt] = useState("");
  return (
    <div className="chatitem">
      <h4>Suraj</h4>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            value={txt}
            variant="outlined"
            className="chattext"
            onChange={(e) => setTxt(e.target.value)}
            onFocus={() => setIsSurajTyping(true)}
            onBlur={() => setIsSurajTyping(false)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => {
              setTxtSuraj([txt, ...txtSuraj]);
              setTxt("");
            }}
          >
            Send
          </Button>
        </Grid>
        {txtChand.map((item) => (
          <Grid item xs={12}>
            <SnackbarContent message={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

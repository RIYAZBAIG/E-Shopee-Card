import React, { useState } from "react";
import { Grid, TextField, Button, SnackbarContent } from "@mui/material";

export const Chand = ({
  setTxtChand,
  txtSuraj,
  txtChand,
  setIsChandTyping,
}) => {
  const [txt, setTxt] = useState("");
  return (
    <div className="chatitem">
      <h4>Chand</h4>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            value={txt}
            className="chattext"
            variant="outlined"
            onFocus={() => setIsChandTyping(true)}
            onBlur={() => setIsChandTyping(false)}
            onChange={(e) => setTxt(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => {
              setTxtChand([txt, ...txtChand]);
              setTxt("");
            }}
          >
            Send
          </Button>
        </Grid>
        {txtSuraj.map((item) => (
          <Grid item xs={12}>
            <SnackbarContent message={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

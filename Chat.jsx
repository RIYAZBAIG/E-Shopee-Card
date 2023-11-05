import React, { useState, useEffect } from "react";
import { Grid, Badge } from "@mui/material";
import { Suraj } from "./Suraj";
import { Chand } from "./Chand";

export const Chat = () => {
  const [txtChand, setTxtChand] = useState([]);
  const [txtSuraj, setTxtSuraj] = useState([]);
  const [isChandTyping, setIsChandTyping] = useState(false);
  const [isSurajTyping, setIsSurajTyping] = useState(false);

  useEffect(() => {
    console.log(txtSuraj);
  }, [txtSuraj]);
  return (
    <div className="sub2">
      <h2>Chat App</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Badge
            badgeContent={isChandTyping ? "Chand is Typing" : 0}
            color="secondary"
          >
            <Suraj
              txtChand={txtChand}
              setTxtSuraj={setTxtSuraj}
              txtSuraj={txtSuraj}
              setIsSurajTyping={setIsSurajTyping}
            />
          </Badge>
        </Grid>
        <Grid item xs={6}>
          <Badge
            badgeContent={isSurajTyping ? "Suraj is typing" : 0}
            color="secondary"
          >
            <Chand
              setTxtChand={setTxtChand}
              txtSuraj={txtSuraj}
              txtChand={txtChand}
              setIsChandTyping={setIsChandTyping}
            />
          </Badge>
        </Grid>
      </Grid>
    </div>
  );
};

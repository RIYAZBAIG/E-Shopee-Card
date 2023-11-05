import React, { useState, useEffect } from "react";
import axios from "axios";

export const ConnectNode = () => {
  const [txt, setTxt] = useState("");
  const getData = async () => {
    const result = await axios.get("http://localhost:5050/person");
    console.log(result.data);
    setTxt(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Hi--</h1>
      <p>{txt.name}</p>
      <p>{txt.city}</p>
      <p>{txt.email}</p>
      <p>{txt.mobile}</p>
    </div>
  );
};

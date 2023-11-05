import React from "react";
import { UserList } from "./UserList";
import { ConnectNode } from "./ConnectNode";

export const Login = () => {
  return (
    <div className="sub">
      <h3>Login</h3>
      <ConnectNode />
      <UserList />
    </div>
  );
};

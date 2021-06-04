import React from "react";
import { Paper, Avatar } from "@material-ui/core";
import UserSettings from './UserSettings';

const User = ({ one }) => {
  return (
    <>
      <div className="users-list">
        <Paper className="user-row" elevation={3}>
          <div className="left-side">
            <Avatar src={one.srcImg}></Avatar>
            <div className="user-name-container">
              <span className="user-name">{one.name}</span>
              <span className="user-lastname"> {one.lastName}</span>
              <span className="user-email"> ({one.email})</span>
            </div>
          </div>
          <div className="right-side">
            <UserSettings one={one} />
          </div>
        </Paper>
      </div>
    </>
  );
};

export default User;

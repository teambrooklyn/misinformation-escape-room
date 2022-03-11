import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "@/shared/Assets/style/messageStyle.js";

const message = `${process.env.PUBLIC_URL}/images/message/imessagelogo.png`;

const useStyles = makeStyles(styles);

const Message = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.imessage}>
      <img className = {classes.logo} src={message} alt="imessagelogo"></img>
      <div className = {classes.messageText}>MESSAGES</div>
  <div className = {classes.fromText} >{props.author}</div>
      <div className = {classes.bodyText} >{props.message}</div>
      </div>
  );
};

export default Message;

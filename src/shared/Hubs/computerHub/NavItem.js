import React from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

import styles from "@/shared/Assets/style/navItemStyle.js";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(styles);

const NavItem = ({ component: Component, access, id, position, size }) => {

  let history = useHistory();
  const location = history.location;

  const classes = useStyles();

  const handleClick = () => {
    if (access) {
      history.push({
        pathname: `${location.pathname}/${id}`,
        state: { prevPath: location.pathname },
      });
    }
  };

  return (
    <>
      {access && <Button onClick={handleClick} classes={{ root: classes.buttonOuter }}
          style={{position: "absolute", top: `${position.top}px`, left: `${position.left}px`, width: `${size.width}px`, height: `${size.height}px`}}
        />}
    </>
  );
};

export default NavItem;

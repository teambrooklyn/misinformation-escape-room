import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, Redirect, useHistory } from "react-router-dom";

import '@/shared/pages/hub.css'
import { Grid } from "@material-ui/core";
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import { red } from "@material-ui/core/colors";
import Zoom from "@material-ui/core/Zoom";
import Dialog from "@material-ui/core/Dialog";

import Puzzle from "@/shared/pages/Puzzle";

import NavItem from "@/shared/Hubs/computerHub/NavItem";
import MessageDialog from "@/shared/Components/MessageDialog";
import { getWithExpiry, setWithExpiry, mapping, levelAndRoomDevice } from "@/shared/UtilityFunctions";

import { makeStyles } from "@material-ui/core/styles";
import style from "@/shared/Assets/style/deviceStyle.js";

const hubData = require("@/rooms/euphorigen/json/hub.json");
const meta = require("@/rooms/euphorigen/json/metadata.json");
const public_url = process.env.PUBLIC_URL;

const useStyles = makeStyles(style)

const Hub = () => {
  const classes = useStyles();

  const level = parseInt(getWithExpiry("level"))
  const preUploadVideoWatched = getWithExpiry("preUploadVideoWatched");
  const history = useHistory()
  const [openMessageDialog, setOpenMessageDialog] = useState(false);
  const [dialogClicked, setDialogClicked] = useState(false);
  const [openMsgBubble, setOpenMsgBubble] = useState(true);
  const currentDevice = getMessageDeviceBg(level)
  const bgPath = getBackgroundPath(level)

  let match = useRouteMatch();

  let keys = [...mapping.keys()];

  useEffect(() => {
    /*
    TO BE IMPLEMENTED WHEN ADDING THE VIDEO
    
    if (level === 5 && window.location.pathname.split("/")[3] === undefined) {
      setOpenMsgBubble(false)
    } else if (preUploadVideoWatched) {
      setDialogClicked(true)
      setOpenMsgBubble(false)
    } else {
      setOpenMsgBubble(true)
      setDialogClicked(false)
    }
    */
    setOpenMsgBubble(true)
    setDialogClicked(false)
  },[level, preUploadVideoWatched])

  const handleCloseMessageDialog = () => {
    setOpenMessageDialog(false)
    setDialogClicked(true)
  };

  const password = getWithExpiry("password")

  if (!password) {
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  }

  const navItems = hubData.navItem.map((item, key) => {
    return (
      <NavItem
        position={{top: item.top, left: item.left}}
        size={item.size}
        access={(level === key + 1 && dialogClicked)}
        id={keys[key]}
        key={keys[key]}
      />
    )
  })

  return (
    <Switch>
      <Route path={`${match.path}/:puzzleId`}>
        <Puzzle/>
      </Route>
      <Route path={match.path}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          wrap="nowrap"
          spacing={0}
          className={classes.svgContainer}
          // inline style enable the bg to reload on every render
          style={{ backgroundImage: `url(${public_url}/images/${bgPath})`,}}
        >
            <Grid style={{position: "relative"}} className="inner-grid">
              <Zoom
                in={openMsgBubble}
                style={{
                  transitionDelay: "100ms",
                  margin: "100px 0px 0px 80px",
                  position: "absolute",
                  top: `${hubData.MessageBubble.top}px`,
                  left: `${hubData.MessageBubble.left}px`
                }}>
                <ChatRoundedIcon
                  style={{
                    color: red[300],
                    zIndex: 4,
                    width: "50px",
                    height: "50px"
                  }}

                  onClick={() => {
                    setOpenMsgBubble(false)
                    setOpenMessageDialog(true);
                  }}
                      />
              </Zoom>

              <Zoom className="lighting"
                in={dialogClicked}
                style={{
                  transitionDelay: "100ms",
                  position: "absolute",
                  top: `${hubData.lightingPosition[level - 1].top}px`,
                  left: `${hubData.lightingPosition[level - 1].left}px`,
                }}
              >
                <img src={`/images/room/light_effect/pop_up${level}.png`} alt="pop-up"/>
              </Zoom>

              {navItems}

              <MessageDialog
                textContent={meta.script[level - 1]}
                openDialog={openMessageDialog}
                setOpenDialog={handleCloseMessageDialog}
                currentLevel={level}
              />

            </Grid>
          </Grid>
      </Route>
    </Switch>
  );
};

function getBackgroundPath(level) {
  let bgPath = "room/main_hub.png"
  return bgPath
}

function getMessageDeviceBg(level) {
  return levelAndRoomDevice.get(level)
}

export default Hub;

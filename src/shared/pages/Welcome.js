import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { setWithExpiry } from "@/shared/UtilityFunctions";

import styles from "@/shared/Assets/style/welcomeStyle";
import { theme } from "@/shared/Assets/main/appStyle";

const meta = require("@/rooms/euphorigen/json/metadata.json");
const { abstract, terms, policy} = meta

const useStyles = makeStyles(styles);

const entryPassword = "Gold"

const WelcomeCommon = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const [password, setPassword] = useState();
  const [storyPanel, setStoryPanel] = useState(0);
  const handlePwChange = (e) => setPassword(e.target.value);

  const public_url = process.env.PUBLIC_URL;

  const handleSubmit = (e) => {
    e.preventDefault();

    var body =
    {
      "password": password,
      "management": false
    }
    if (password === entryPassword) {
      body.password = "LokiApril28";
    }

    /*
    ///////////////////////////////////////////////////////////////////////////////////////////
    setWithExpiry("level", 1, 7200000)
    setWithExpiry("password", true, 7200000)

    //redirect to game (laptop screen)
    history.push({
      pathname: '/puzzles',
      state: { password: true }
    });
    ///////////////////////////////////////////////////////////////////////////////////////////
    */
   
    setTimeout(() => {
    fetch(`${process.env.REACT_APP_API_URL}/sessions`, {
        method: 'post',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
      .then((response) => {
        if (response.status === 200) {
            const auth = response.headers.get("authorization")
            document.cookie = "auth=" + auth;
            response.json().then((data) => {
              if(data.id === -2) {
                document.cookie = "trackable=false"
              } else {
                document.cookie = "trackable=true"
              }

              document.cookie = "id=" + data.id;

              setWithExpiry("level", 1, 7200000)
              setWithExpiry("password", true, 7200000)

              //redirect to game (laptop screen)
              history.push({
                pathname: '/puzzles',
                state: { password: true }
              });
            })
        } else {
          alert("Incorrect password. Please try again.")
        }
      })
    }, 0)
  };

    return (
      <Container style={{ height: "100%", backgroundImage: "url(/images/laannbg1.svg)", backgroundSize: "150% auto", backgroundRepeat: "no-repeat", maxWidth:"unset", overflow:"auto"}}>
        <Container component="main" maxWidth="md">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "90vh" }}
          >
            <Paper
              elevation={0}
              className={classes.card}
              style={{
                background: "transparent",
                width: theme.spacing(70),
                height: theme.spacing(20),
                marginBottom: "50px",
                padding: theme.spacing(4),
              }}
            >
              <Paper
                elevation={0}
                className={classes.card}
                style={{ background: "#FFFFFF", width: "160px", height: "100%", marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2), padding: "25px", borderRadius: "50%"}}
              >   <img
                    src={`${public_url}/images/laannlogo.png`}
                    alt="La'Ann 2050 Olympics Logo"
                    style={{ height: "160px", width: "auto" }}
                  ></img>
                </Paper>
              </Paper> 

            <Typography
              component="p"
              variant="body1"
              align="center"
              className={classes.paragraph}
              style={{width: "100%", fontSize: (storyPanel == 0 ? "4rem" : "1.5rem")}}
            >
              {abstract[storyPanel]}
            </Typography>
            <Grid container direction="row">
              { storyPanel > 0 &&
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => setStoryPanel(storyPanel - 1)}
                  style={{marginLeft: "0", marginRight: "auto"}}
                >
                  Previous
                </Button>
              }
              { storyPanel < 3 &&
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => setStoryPanel(storyPanel + 1)}
                  style={{marginLeft: "auto", marginRight: "0"}}
                >
                  Next
                </Button>
              }
            </Grid>
            {props.children}
            { storyPanel == 3 &&
              <form
                className={classes.form}
                autoComplete="off"
                onSubmit={handleSubmit}
                onChange={handlePwChange}
              >
                <TextField
                  id="standard-basic"
                  label="Enter Password"
                  required
                  className={classes.button}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  color="primary"
                  style={{marginTop: "15px", marginLeft: "5px"}}
                >
                  Enter
                </Button>
              </form>
            }
          </Grid>
        </Container>
      </Container>
    );

};

const Welcome = () => {
  const classes = useStyles();
  const location = useLocation();
  const isPublic = true; //location.pathname.includes("public");

  return (
    <WelcomeCommon>
      {!isPublic &&
      <>
        <Typography component="p" variant="body1" align="center" className={classes.paragraph}>
          {terms}
          {" " + policy.text + " "}
          <Link color="inherit" href={policy.url}>
            {policy.url}
          </Link>
        </Typography>
      </>}
    </WelcomeCommon>
  );
};

export default Welcome

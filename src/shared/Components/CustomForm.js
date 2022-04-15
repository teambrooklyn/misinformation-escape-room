import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import { getWithExpiry, setWithExpiry, GetCookie, logMetric } from "@/shared/UtilityFunctions";

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#FFE790",
  },
  form: {
    width: "100%",
  },
  input: {
    fontSize: "20",
  },
  label: {
    color: "white"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  puzzle5Input: {
    fontSize: "20",
    color: "white"
  }
});

const useStyles = makeStyles(styles);

const passwords = ["scandal", "lies", "betray", "9817"]

const CustomForm = (props) => {
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    var level = parseInt(getWithExpiry("level"))

    var body =
    {
        "password": password,
        "puzzle": level
    }

    fetch(`${process.env.REACT_APP_API_URL}/game/comparepassword`, {
        method: 'post',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': GetCookie('auth')
        },
        body: JSON.stringify(body)
    })
    .then((response)=>{ 
      if(password.toLowerCase() === passwords[level - 1]) {
        setPassword("");
        //set level to next.
        setWithExpiry("level", level + 1, 7200000);

        if(GetCookie("trackable") === "true") {
          logMetric(level, "TimeEvent", "end")
        }

        let newLevel = props.id + 1;
        alert("Password is correct. Congrats!");

        switch (newLevel) {
          default:
            history.replace('/puzzles');
            break;
        }

      } else {
        if(GetCookie("trackable") === "true") {
          logMetric(level, "Password", password)
        }
        alert("Password incorrect. Please check your answer and try again.");
      }
    })
  };

  const handleChange = (e) => setPassword(e.target.value.toLowerCase());

  const classes = useStyles();
  let content;


    if (props.id === 2) {
      content =
        <form
        className={classes.form}
        autoComplete="off"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className={classes.paper}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Container maxWidth="xs">
              <TextField
                id="standard-basic"
                label="Enter Password"
                fullWidth
                InputProps={{ className: classes.input }}
                InputLabelProps={{ className: classes.label }}
                required
                className={classes.margin}
              />
              <Button
                type="submit"
                variant="contained"
                size="medium"
                fullWidth
                color="primary"
                background="#DF0024"
                className={classes.margin}
              >
                Confirm
              </Button>
            </Container>
          </Grid>
        </div>
      </form>
    } else if (props.id === 5) {
      content =
      <form
      className={classes.form}
      autoComplete="off"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className={classes.paper}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Container maxWidth="xs">
            <TextField
              id="standard-basic"
              label="Enter Password"
              fullWidth
              InputProps={{ className: classes.puzzle5Input }}
              InputLabelProps={{ className: classes.puzzle5Input }}
              required
              className={classes.margin}
            />
            <Button
              type="submit"
              variant="contained"
              size="medium"
              fullWidth
              color="primary"
              background="#DF0024"
              className={classes.margin}
            >
              Confirm
            </Button>
          </Container>
        </Grid>
      </div>
    </form>
    } else {
      content =
      <form
      className={classes.form}
      autoComplete="off"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className={classes.paper}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Container maxWidth="xs">
            <TextField
              id="standard-basic"
              label="Enter Password"
              fullWidth
              InputProps={{ className: classes.input }}
              InputLabelProps={{ className: classes.input }}
              required
              className={classes.margin}
            />
            <Button
              type="submit"
              variant="contained"
              size="medium"
              fullWidth
              color="primary"
              background="#DF0024"
              className={classes.margin}
            >
              Confirm
            </Button>
          </Container>
        </Grid>
      </div>
    </form>

  }

  return content;
};

export default CustomForm;

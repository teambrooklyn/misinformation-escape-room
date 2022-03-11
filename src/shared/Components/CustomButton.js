import React from "react";
import { Button } from "@material-ui/core";

export default function CustomButton(props) {
  return (
    <Button
      type="submit"
      variant="contained"
      size="large"
      fullWidth
      color="primary"
      className={this.props.classes.margin}
    >
      {props.text}
    </Button>
  );
}

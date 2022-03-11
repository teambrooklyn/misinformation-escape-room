import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

import { Button, Grid } from "@material-ui/core";

import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const CustomLightbox = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const public_url = process.env.PUBLIC_URL;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Button
        variant="contained"
        fullWidth
        size="large"
        style={{color: "white", backgroundColor: "#0085c7", width: "100px", marginTop:"20px"}}
        onClick={() => setIsOpen(true)}
      >
        Part {props.part + 1}
      </Button>
      {isOpen && (
        <Lightbox
          mainSrc={public_url + props.src}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </Grid>
  );
};

export default CustomLightbox;
